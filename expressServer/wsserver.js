const express = require('express');
const http = require('http');
const url = require('url');
const fs = require('fs');
const WebSocket = require('ws');

var bodyParser = require('body-parser');
var path = require('path');
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
var serialport = require('./routes/serialport');
var archivo = require('./routes/archivo');
var copyfile = require('./routes/copyfile');
var upload = require('./routes/upload');
var publish = require('./routes/publish');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Set StaticPath
//Used by Angular app
app.use(express.static(path.join(__dirname, 'public')));

app.use('/copyfile', copyfile); //copy file with gas prices from gascontrol folder to nodeserver
app.use('/serialport', serialport);
app.use('/archivo', archivo);
app.use('/upload', upload);
app.use('/publish', publish);

app.use(function(req, res) {
    res.send({ msg: "hello" });
});

app.get('/', function(req, res) {
    res.send('');
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
var jsonObj = {};

wss.on('connection', function connection(ws, req) {
    const location = url.parse(req.url, true);
    // You might use location.query.access_token to authenticate or share sessions
    // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)


    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        var response = {};
        try {
            try {
                jsonObj = JSON.parse(message);
            } catch (err) {
                throw "Se ha detectado un error en el mensaje JSON recibido. Por favor verificar el formato JSON del mensaje o la información incluida en el mensaje";
            }

            var valid = true;
            //Verificar que los campos a actualizar existan	
            if (jsonObj.premium == undefined && jsonObj.magna == undefined && jsonObj.diesel == undefined) {
                var condition = "La peticion de actualizacion de combustibles no ALGUN producto a actualizar";
                response = { "status": "error", "code": 501, "condition": condition };
                console.log(response);
                valid = false;
                ws.send(JSON.stringify(response));
            };

            var product = "";
            //Verificar que los campos sean mayores a cero
            if (jsonObj.premium != undefined && jsonObj.premium < 0) {
                valid = false;
                product = "Premium, ";
            }
            if (jsonObj.magna != undefined && jsonObj.magna < 0) {
                valid = false;
                product = product + "Magna, ";
            }
            if (jsonObj.diesel != undefined && jsonObj.diesel < 0) {
                product = product + "Diesel ";
                valid = false;
            };

            if (product != "") {
                var condition = product + "incluye(n) información de precio incorrecta (<0)";
                response = { "status": "error", "code": 502, "condition": condition };
                ws.send(JSON.stringify(response));
            }

            const prices = JSON.stringify(jsonObj);

            if (valid) {
                console.log(jsonObj);
                response = { "status": "ok", "code": 200, "condition": "" };
                ws.send(JSON.stringify(response));

                fs.truncate("uploads\\pricesupdate.json", 0, function() {
                    fs.writeFile("uploads\\pricesupdate.json", prices, function(err) {
                        if (err) {
                            return console.log("Error writing file: " + err);
                        }
                    });
                });


            }

        } catch (err) {

            response = { "status": "error", "code": 500, "condition": err };
            ws.send(JSON.stringify(response));
        }
    });

});


server.listen(8080, function listening() {
    console.log('Listening on %d', server.address().port);
});

/*
  Response codes:
  200: Información recibida y correcta
  500: Error en objeto JSON, posiblemente error de sintaxis
  501: Error en informacion: La peticion de actualizacion de combustibles no incluye ALGUN producto a actualizar
  502: Error en informacion: Alguno de los combustibles inlcye informacion de precio incorrecta (<0)
  
*/
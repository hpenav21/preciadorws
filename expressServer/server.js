var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var serialport = require('./routes/serialport');
var archivo = require('./routes/archivo');
var copyfile = require('./routes/copyfile');
var upload = require('./routes/upload');
var publish = require('./routes/publish');
server = express();
var socketServer = require('http').Server(server);
var io = require('socket.io')(socketServer);


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

//Set StaticPath
server.use(express.static(path.join(__dirname, 'public')));

server.use('/copyfile', copyfile);   //copy file with gas prices from gascontrol folder to nodeserver

server.use('/serialport', serialport);

server.use('/archivo', archivo );

server.use('/upload', upload);
server.use('/publish', publish);


server.get('/', function(req,res){
	res.send('');
});

server.listen(8000, function(){
	console.log('Server Started on Port 8000');
});

io.on('connection',function(socket){
  ID = socket.id;
  console.log('client id - '+ socket.id);     
})

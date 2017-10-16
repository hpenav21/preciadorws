var express = require('express');
var multer = require('multer');
var path = require('path');
var fs = require('fs');

var router = express.Router();

var upload = multer({ dest: 'uploads/'});
var type = upload.single('file');

router.use(express.static(path.join(__dirname, 'uploads')));

var storage = multer.diskStorage({
  // destination
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });


router.post('/', type, function (req,res) {
	//res.setHeader('Content-Type', 'application/json');
  /** When using the "single"
      data come in "req.file" regardless of the attribute "name". **/
  var tmp_path = req.file.path;

  /** The original name of the uploaded file
      stored in the variable "originalname". **/
  var target_path = './uploads/' + req.file.originalname;
  
  console.log("target Path...");
  console.log(target_path);
  //var target_path = req.file.originalname;   //store in webserver's root path
  
  if(target_path.lastIndexOf(".csv") == -1){
	var message = "El archivo: " + req.file.originalname + " , no es del tipo esperado. Favor de verificar"
	res.send({"status":message});
	clearfolder(fs);
	return;
  }
  
  /** A better way to copy the uploaded file. **/
  var src = fs.createReadStream(tmp_path);
  var dest = fs.createWriteStream(target_path);
  src.pipe(dest);
  
	fs.readdir('./uploads/', (err, files)=>{
		clearfolder(fs);
	});
	
  src.on('end', function() { res.send({"status":"Archivo cargado correctamente"}) });
  src.on('error', function(err) { res.send({"status":"Error al cargar el archivo"}) });
  
});

function clearfolder(fs){
	fs.readdir('./uploads/', (err, files)=>{
	   for (var i = 0, len = files.length; i < len; i++) {
		  var lastDotPosition = files[i].lastIndexOf(".");
		  if (lastDotPosition === -1)   
		  	  fs.unlink("./uploads/" + files[i]);
		}
	});
}

module.exports = router;
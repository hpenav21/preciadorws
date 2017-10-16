const fs = require('fs');  
//const child_process = require('child_process');  
var express = require('express');
//var terminate = require('terminate');
//const { exec } = require('child_process');
//var spawn = require('cross-spawn');
var shell = require("shelljs");
var cwd = shell.pwd();

const { spawn } = require('child_process');

var router = express.Router();

router.get('/:command', function(req,res){

    var command = req.params.command;
	console.log(" ******************* ");
	console.log(cwd);
	
	
	if (shell.exec('java -jar routes\\javaSolution\\serialComm.jar' + ' \"' + command + '"\"').code !== 0) {
		shell.echo('Error: Java  commit failed');
		//shell.exit(1);
	}
	
	
	/*
	//console.log("param command : " + command);
	var cmd = "java -jar \\projects\\Angular2\\gasledexpress\\expressServer\\routes\\javaSolution\\serialComm.jar" + " \"" + command + "\"";
	
	console.log(cmd);
	//const ls = spawn('cmd.exe', ['java -jar /c/projects/Angular2/gasledexpress/expressServer/routes/javaSolution/serialComm.jar', cmd]);
	
	const ls = spawn('cmd.exe',['/s', '/c', cmd]);
	
	ls.stdout.on('data', (data) => {
	  console.log(`stdout: ${data}`);
	});

	'pwd', {cwd: '/home/user/directory'}
	ls.stderr.on('data', (data) => {
	  console.log(`stderr: ${data}`);
	});

	ls.on('close', (code) => {
	  console.log(`child process exited with code ${code}`);
	});
	
	ls.on('error', (err) => {
	console.log('Failed to start child process.');
	});
	*/
/*
	var command = req.params.command;
	var message = "";
	console.log("param command : " + command);
	  
	var child = exec('java -jar \\projects\\Angular2\\gasledexpress\\expressServer\\routes\\javaSolution\\serialComm.jar' + " " + command, {maxBuffer: 1024 * 100000}, (err, stdout, stderr) => {

	  if (err) {
		console.error(err);
		terminate(child.pid, function(err, done){
		  if(err) { // you will get an error if you did not supply a valid process.pid 
			console.log("Killing java process: " + err); // handle errors in your preferred way. 
		  }
		  else {
			console.log("process killed" + child.pid); // do what you do best! 
		  }
		});
		message="java call error: " + err;
		res.send({result:message});
	  }
	  else{
		console.log("checking java result");
		console.log(stdout.substring(stdout.indexOf("Logging")));
		message = stdout.substring(stdout.indexOf("Logging"));
		res.send({result:message});
		terminate(child.pid, function(err, done){
		  if(err) { // you will get an error if you did not supply a valid process.pid 
			console.log("Killing java process: " + err); // handle errors in your preferred way. 
		  }
		  else {
			console.log("process killed" + child.pid); // do what you do best! 
		  }
		});
	  }
	});
	
	//res.send({result:message});
	
	//res.redirect('/');
	
	*/
});

module.exports = router;

/*
terminate(child.pid, function(err, done){
		  if(err) { // you will get an error if you did not supply a valid process.pid 
			console.log("Oopsy: " + err); // handle errors in your preferred way. 
		  }
		  else {
			console.log("process killed" + child.pid); // do what you do best! 
		  }
		});
		*/
		
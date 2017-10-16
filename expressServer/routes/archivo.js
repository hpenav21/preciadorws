fs = require('fs');
var express = require('express');
var router = express.Router();

router.get('/:data', function(req, res) {

    var data = req.params.data;
    var message = "";

    /*
    var ds = fs.readFile('src.txt', 'utf8', function (err,data) {
      if (err) {
    		fs.close(ds, filecallback);  
    	return console.log(err);
      }
      console.log(data);
      if(data.length > 1){
    	res.send({prices:data});
      	fs.close(ds, filecallback);
      }
    });
    */
    var fileName = "./uploads/pricesupdate.json";
    fs.exists(fileName, function(exists) {
        if (exists) {
            // get information about the file
            fs.stat(fileName, function(error, stats) {
                // open the file (getting a file descriptor to it)
                fs.open(fileName, "r", function(error, fd) {
                    var buffer = new Buffer(stats.size);

                    // read its contents into buffer
                    fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
                        var data = buffer.toString("utf8", 0, buffer.length);

                        console.log(data);
                        res.send({ prices: data });
                        fs.close(fd);
                    });
                });
            });
        } else {
            console.log("Prices file not found...");
        }
    });

});


module.exports = router;
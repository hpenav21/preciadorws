fs = require('fs');
var express = require('express');
var router = express.Router();

router.get('/:copyfile', function(req,res){
	console.log(req);
	var onePromise = copyFilePromise("C:\\Program Files (x86)\\ATIO\\ControlGAS\\Reporte de Ventas.csv", "Reporte de Ventas.csv");
	//var anotherPromise = copyMultiFilePromise(new Array(new Array("src1.txt", "dst1.txt"), new Array("src2.txt", "dst2.txt")));	
	onePromise.then(function(data){
		console.log("copyfile resolved");
		console.log(data);
		res.send({prices:onePromise});
	})
	
	onePromise.catch(function(data){
		console.log("copyfile failed ....");
		console.log(data);
		res.send({prices:onePromise});
	});
	
});

function copyFile(source, target, cb) {
    console.log("CopyFile", source, target);

    var ensureDirectoryExistence = function (filePath) {
        var dirname = path.dirname(filePath);
        if (fs.existsSync(dirname)) {
            return true;
        }
        ensureDirectoryExistence(dirname);
        fs.mkdirSync(dirname);
    }
    ensureDirectoryExistence(target);

    var cbCalled = false;
    var rd = fs.createReadStream(source);
    rd.on("error", function (err) {
        done(err);
    });
	
    var wr = fs.createWriteStream(target);
    wr.on("error", function (err) {
        done(err);
    });
	
    wr.on("close", function (ex) {
        done();
    });
	
    rd.pipe(wr);
    function done(err) {
        if (!cbCalled) {
            cb(err);
            cbCalled = true;
        }
    }
}

function copyFilePromise(source, target) {
    return new Promise(function (accept, reject) {
		try{
			copyFile(source, target, function (data) {
				if (data === undefined) {
					accept(data);
				} else {
					reject(data);
				}
			});
		}
		catch(err){
			console.log(err);
		}
    });
}

/*
function copyMultiFilePromise(srcTgtPairArr) {
    var copyFilePromiseArr = new Array();
    srcTgtPairArr.forEach(function (srcTgtPair) {
        copyFilePromiseArr.push(copyFilePromise(srcTgtPair[0], srcTgtPair[1]));
    });
    return Promise.all(copyFilePromiseArr);
}
*/

module.exports = router;
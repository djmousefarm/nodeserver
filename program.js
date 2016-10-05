var fs = require('fs');
var num = undefined;
function getFile(callback) {
	 fs.readFile(process.argv[2],'utf8', function callback(err,myFile) {
		if (err) {
			//console.log(process.argv[2] + " is not ready yet!);
			} else {
			console.log(myFile);
			num = myFile.split('\n').length-1;
			callback();
			}	
		})
	}
function output() {console.log(num)};
getFile(num);

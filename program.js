var fs = require('fs');
var fileText = undefined;
function getFile(callback) {
	 fs.readFile(process.argv[2],'utf8', function callback(err,myFile) {
		if (err) {
			//console.log(process.argv[2] + " is not ready yet!);
			} else {
			//console.log(myFile);
			fileText = myFile;
			callback();
			};	
		});
	};
function input() {console.log(fileText.split('\n').length-1)};
getFile(input);

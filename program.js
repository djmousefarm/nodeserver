var fs = require('fs');
var fileText = undefined;
function getFile(callback) {
	 fs.readFile(process.argv[2],'utf8', function callback(err,myFile) {
		if (!err) {
			fileText = myFile;
			} else {
			console.error(process.argv[2] + " is not ready yet!");
			//this does nothing at the moment - a placeholder for error catching			
			//callback();
			};	
		});
	};
function input() {console.log(fileText.split('\n').length-1)};
getFile(input);

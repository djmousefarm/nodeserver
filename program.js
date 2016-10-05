var fs = require('fs');
var myModule = require('./lsFilter.js');
var fileText = undefined;
function getFile(callback) {
	 fs.readFile(process.argv[2],'utf8', function fileReady(err,myFile) {
		if (!err) {
			fileText = myFile;
			callback();
			} else {
			console.error(process.argv[2] + " is not ready yet!");
			//this does nothing at the moment - a placeholder for error catching			
			//callback();
			};	
		});
	};
function input() {console.log(fileText.split('\n').length-1)};
getFile(input);

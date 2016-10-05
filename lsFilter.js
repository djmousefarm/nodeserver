var fs = require('fs');
var dir = process.argv[2];
var ext = process.argv[3];
var filteredList = undefined;
function showList(callback) {
	fs.readdir(dir, function listReady(err, list) {
		if (err) {
			console.error(err);
		}
		filteredList = list;
		callback();
	});
};
function hasExt(value) {if(value.endsWith(ext)) {return value}};
function lister() {filteredList.filter(hasExt).forEach(function(element){console.log(element)})};
showList(lister);

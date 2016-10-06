var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];

module.exports = {
function () {
	fs.readdir(dir, function listReady(err, list) {
		if (err) {
			return console.error(err);
			//console.error(err);
		}
		list.forEach(function(element) {
			if (path.extName(element)===ext) {console.log(element)}});
		//callback(null,list);
	});
}
}
/*function lister() {
	filteredList.forEach(function(element){
		if (path.extName(element)===ext) {console.log(element)}})};
module.exports = showList(lister);*/

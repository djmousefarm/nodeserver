var http = require('http');
var bl = require('bl');
var url = process.argv[2];

http.get(url, function callback(response) {
	if (response.error)
		console.error('Error : ' + response.error)
	response.pipe(bl(function(err,data) {
			if (err)
				console.error('Pipe error : ' + err)
			var d = data.toString()
			console.log(d.length);
			console.log(d.toString())
			}))
	})



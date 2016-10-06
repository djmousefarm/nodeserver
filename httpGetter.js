var http = require('http');

var url = process.argv[2];

http.get(url, function callback(response) {
	if (response.error) 
		console.error('Error : ' + response.error)
	response.on('data',function(data) {
		console.log(data)
		})
	})

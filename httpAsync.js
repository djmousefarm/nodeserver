var http = require('http')
var bl = require('bl')
var urls = process.argv.slice(2)
var count = 0;
var out = [];

function output() {
	for (var i = 0; i < out.length; i++) {
		console.log(out[i])
		}
	}


for (var j = 0; j < urls.length; j++) {
	http.get(urls[j], function callback(response) {

		if (response.error) 
			console.error('Error with ' + url + ' returning ' + response.error)
				
		response.pipe(bl(function(err,data) {
			if (err)
				console.error('Pipe error : ' + err)
			
			out[j]=data.toString()
			count++
					
			if (count===3) output()
			}))
	
		})
	}



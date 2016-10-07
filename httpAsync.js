var http = require('http')
var bl = require('bl')
var urls = process.argv.slice(2)
var count = 0;
var out = [];

function output(lines) {
	for (var i = 0; i < lines.length; i++) {
		console.log(lines[i])
		}
	}

function httpget(urls) {
		for (var j = 0; j < urls.length; j++) {

			http.get(urls[j], function callback(response) {
		
					if (response.error) 
						console.error('Error with ' + url + ' returning ' + response.error)
					response.pipe(bl(function(err,data) {
						if (err) {
							console.error('Pipe error : ' + err)
							}
						out[count]=data.toString()
						count++
						//console.log(data.toString())
						if (count===3) output(out)
						}))
			
				})
			}
		}

httpget(urls)

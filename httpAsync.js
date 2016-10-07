var http = require('http')
var bl = require('bl')
var urls = process.argv.slice(2)
var count = 0;
var out = [];

function httpget(urls) {
		urls.forEach(function(url) {
			http.get(url, function callback(response) {
			
					if (response.error) 
						console.error('Error with ' + url + ' returning ' + response.error)
					response.pipe(bl(function(err,data) {
						if (err) {
							console.error('Pipe error : ' + err)
							}
						out[count]=data.toString()
						count++
						//console.log(data.toString())
						if (count===3) out.forEach(function(line) {console.log(line)})
						}))
				
				})
		})
	}
httpget(urls)

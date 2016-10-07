var http = require('http')
var bl = require('bl')
var urls = process.argv.slice(2)
function httpget(urls) {
		urls.forEach(function(url) {
			http.get(url, function callback(response) {
			
					if (response.error) 
						console.error('Error with ' + url + ' returning ' + response.error)
					response.pipe(bl(function(err,data) {
						if (err) {
							console.error('Pipe error : ' + err)
							}
						console.log(data.toString())
						}))
		
				})
		})
	}
httpget(urls)

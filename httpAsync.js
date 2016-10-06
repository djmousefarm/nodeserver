var http = require('http')
//var firstURL = process.argv[2]
//var secondURL = process.argv[3]
//var thirdURL = process.argv[4]
// instead of creating variables from the process.argv array why not just iterate through the array itself?
// some sort of loop is going to be required.  I just need to maintain another array of the outputs, maybe
// just add the response to each part of the array from each URL until all parts of the array are populated?

function httpget(url) {
		http.get(url, function callback(response) {
			response.encoding('utf8')
			if (response.error) 
				console.error('Error with ' + url + ' returning ' + response.error)
			response.on('data',function(data) {
				console.log(data)
				}
		}
	}

var http = require('http')
//var firstURL = process.argv[2]
//var secondURL = process.argv[3]
//var thirdURL = process.argv[4]
// instead of creating variables from the process.argv array why not just iterate through the array itself?
// some sort of loop is going to be required.  I just need to maintain another array of the outputs, maybe
// just add the response to each part of the array from each URL until all parts of the array are populated?
var urls = process.argv.slice(2);
function httpget(urls) {
		urls.forEach(function(url) {
			http.get(url, function callback(response) {
			
					if (response.error) 
						console.error('Error with ' + url + ' returning ' + response.error)
					response.on('data',function(data) {
						console.log(data.toString())
						})
		
				})
		})
	}
httpget(urls);
//console.log(httpget(process.argv[3]));
//console.log(httpget(process.argv[4]));
/*
var out = [];
for (var i = 2; i < process.argv.length; i++) {
	out[i-2] = httpget(process.argv[i])
	}
out.forEach(console.log(function(element){return element}))
*/

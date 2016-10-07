var net = require('net')  
var port = process.argv[2]
var server = net.createServer(function (socket) {  
       // socket handling logic  
	socket.write("TEST")
	socket.end()
})  
server.listen(8000) 

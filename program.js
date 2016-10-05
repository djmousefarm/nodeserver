var fs = require('fs');
// by telling it to read the file as utf8 you no longer need to convert from a buffer object to a string!
var num = fs.readFileSync(process.argv[2],'utf8').split('\n').length-1;
console.log(num);

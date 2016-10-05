var arr = process.argv;
var num = 0;
for (var i = 2;i < arr.length; i++) {
	num+=parseInt(arr[i]);
}
console.log(num);

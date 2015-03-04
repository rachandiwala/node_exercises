var fs = require('fs');

var read = fs.readFileSync(process.argv[2])   // read file from command line, assign to var read
var buff = read.toString().split('\n').length;  //convert content to string, split 
console.log(buff - 1)


// same as above, step by step: 
/*

var string = read.toString();
var split = string.split('\n');
var lenth = split.length - 1;

console.log(lenth);

*/

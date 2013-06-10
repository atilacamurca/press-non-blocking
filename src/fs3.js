
var fs = require('fs');

var data = fs.readFileSync('arq1.txt',
   {encoding: 'utf-8'});
console.log(data);
fs.unlink('arq1.txt');
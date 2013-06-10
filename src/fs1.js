
var fs = require('fs');

fs.readFile('arq1.txt', 'utf-8', function(err, data) {
	if (err) throw err;	
	console.log(data);
});

fs.unlink('arq1.txt', function (err) {
  if (err) throw err;
  console.log('successfully deleted arq1.txt');
});


var fs = require('fs');

fs.readFile('arq1.txt', function(e, data) {
	if (!e) {
		console.log(data);
		fs.unlink('arq1.txt');
	} else {
		console.log('ocorreu em erro ao ler.');
	}
});
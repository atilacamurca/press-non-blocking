var util = require('util'),
   EventEmitter = require('events').EventEmitter;

var Recepcionista = function() {
   EventEmitter.call(this);
};

var Paciente = function() {
   EventEmitter.call(this);
};

util.inherits(Paciente, EventEmitter);
util.inherits(Recepcionista, EventEmitter);

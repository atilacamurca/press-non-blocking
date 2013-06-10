Recepcionista.prototype.atender = function() {
   console.log("Preencha o formulário.");
};

Paciente.prototype.preencher = function(recep, nome, t) {
   setTimeout(function() {
      recep.emit('entregar', {nome: nome});
   }, t);
};

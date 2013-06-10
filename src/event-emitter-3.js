var r = new Recepcionista();
r.on("entregar", function(dados) {
   console.log("Ok Sr(a). " + dados.nome
		+ ", você será atendido.");
});
var p = new Paciente();

r.atender();
p.preencher(r, 'Mario', 2500);
r.atender();
p.preencher(r, 'Luigi', 1500);
r.atender();
p.preencher(r, 'Ozzy', 2000);

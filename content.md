# Introdução

### Introdução

Programas que usam E/S não-bloqueantes tendem a seguir a regra que toda função
deve retornar imediatamente.

> Isso parece uma *thread* não?

Existem diferenças. Vejamos um exemplo da vida real.

---

### Recepcionista do médico
\framesubtitle{Doutor é quem tem doutorado}

\includegraphics[scale=0.35]{img/ex1-1.png}

Imaginem uma fila na recepção de um consultório médico.

---

### Recepcionista do médico
\framesubtitle{Doutor é quem tem doutorado}

Para ser atendido o paciente precisa preencher **3 formulários**.

Num mundo bloqueante o paciente preencheria os **3 formulários** na própria
recepção, fazendo com que a fila espere.

Usando outra *thread* (recepcionista) poderíamos resolver este problema?

---

### Recepcionista do médico
\framesubtitle{Doutor é quem tem doutorado}

\includegraphics[scale=0.35]{img/ex1-2.png}

Parcialmente, já que mesmo assim a fila deve esperar. Mas como fazer com que
a fila não precise esperar?

---

### Recepcionista do médico
\framesubtitle{Doutor é quem tem doutorado}

\includegraphics[scale=0.35]{img/ex1-3.png}

Enquanto um preenche o formulário, o outro é antendido. E assim por diante.
Dessa forma quando um paciente termina de preencher ele volta a fila apenas
para entregar o formulário e ser atendido em seguida.

# NodeJS

### NodeJS

Uma das formas de implementarmos esse comportamento em uma linguagem de programação
é usando [NodeJS](http://nodejs.org/). Rodando em cima do ambiente V8 do Google
Chrome, NodeJS consegue trabalhar fora do browser usando JavaScript.

---

### Hello World

Instalação: `$ sudo apt-get install nodejs`

\inputjscodefile{ src/hello.js }

Salve como `hello.js`. Execute num terminal:

~~~
$ node hello.js
~~~

# Emitindo eventos

### Emitindo eventos

\inputjscodefile{ src/event-emitter-1.js }

---

### Emitindo eventos

\inputjscodefile{ src/event-emitter-2.js }

---

### Emitindo eventos

\inputjscodefile{ src/event-emitter-3.js }

---

### Emitindo eventos

\includegraphics[scale=0.35]{img/throughput.png}

Veja a diferença na vazão.

---

\slidetitle{E/S}

# E/S

## Operações com arquivos

### Operações com arquivos

\inputjscodefile{ src/fs1.js }

Este trecho de código eventualmente irá funcionar como esperado. Isso se fosse
uma operação bloqueante, onde o método `fs.unlink` iria esperar o método
`fs.readFile`.

---

### Operações com arquivos

Entretanto, estes métodos são assíncronos e podem não funcionar como esperado.

Então como fazer para resolver isso? Utilize chamadas aninhadas.

\inputjscodefile{ src/fs2.js }

---

### Operações com arquivos

Outra opção é utilizar chamadas síncronas do mesmo método.

\inputjscodefile{ src/fs3.js }

<http://nodejs.org/api/fs.html>

<!--
http://www.slideshare.net/marcusf/nonblocking-io-event-loops-and-nodejs
-->

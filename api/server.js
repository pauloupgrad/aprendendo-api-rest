const express = require("express");
const port = 8081;

// Criando o servidor
const server = express();

server.get('/', (resquest, response) => {
    response.send('<h1>Home</h1>');
});

server.get('/servicos', (resq, resp) => {
    resp.send('<h1>Serviços</h1>');
});

server.get('/contatos', (resq, resp) => {
    resp.send('<h1>Contato</h1>');
});

server.listen(port, () => {
    console.log(`O servidor esta de pe em: http:\\localhost:${port}`);
    console.log(`Para derubar o servidor ctrl + c`);
});
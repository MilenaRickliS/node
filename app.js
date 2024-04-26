const http = require('http');

const requestListener = function (req, res) {
if (req.url === "/") { // Se o URL da solicitação for "/", retorna "Você está na página inicial"
res.writeHead(200);
res.end("Você está na página inicial");
} else if (req.url === "/sobre") { // Se o URL da solicitação for "/sobre", retorna "Você está na página sobre"
res.writeHead(200);
res.end("Você está na página sobre");
} else { // Para qualquer outro URL, retorna "Página não encontrada"
res.writeHead(404);
res.end("Página não encontrada");
}
};

const server = http.createServer(requestListener);
server.listen(8000, 'localhost', () => {
console.log("Servidor está rodando em http://localhost:8000");
});
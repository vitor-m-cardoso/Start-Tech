import express from 'express';

const server = express();

server.get('/status', (_, response) => {
  response.send({
    status: 'Okay',
  })
});

server.post('/authenticate', express.json(), (request, response) => {
  console.log('e-mail', request.body.email, 'senha', request.body.password);
  response.send();
});

//configurar porta e o hostname
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

// como criar um servidor, configurando a porta o hostname e uma funcao que sera executada assim que for chamada
server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}.`);
});
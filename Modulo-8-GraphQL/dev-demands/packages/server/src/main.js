import { createServer } from 'http';
import { parse } from 'querystring'; // modulo nativo do node

// configuracoes do servidor e respostas
const server = createServer((request, response) => {
  switch(request.url) {
    case '/status': {
      response.writeHead(200, {
        'Content-type': 'application/json',
      });
      response.write(JSON.stringify({
        status: 'Okay',
      }));
      response.end();
      break;
    }
    case '/authenticate': {
      let data = '';
      request.on('data', (chunk) => {
        data += chunk;
      });
      request.on('end', () => {
        const params = parse(data);
        
        response.end();
      });
      break;
    }
    default: {
      response.writeHead(404, 'Service not found.');
      response.end();
    }
  }
});

//configurar porta e o hostname
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

// como criar um servidor, configurando a porta o hostname e uma funcao que sera executada assim que for chamada
server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}.`);
});
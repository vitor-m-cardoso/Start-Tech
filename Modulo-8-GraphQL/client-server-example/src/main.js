import { createServer } from 'http';
import { readFile } from 'fs'; // file sistem
import { resolve } from 'path' // modulo nativo do node
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
    case '/sign-in': {
      const path = resolve(__dirname, './pages/sign-in.html');
      readFile(path, (error, file) => {
        if (error) {
          response.write(500, 'Can\'t process HTML file.')
          response.end();
          return;
        }

        response.writeHead(200);
        response.write(file);
        response.end();
      });
      break;
    }
    case '/home': {
      const path = resolve(__dirname, './pages/home.html');
      readFile(path, (error, file) => {
        if (error) {
          response.write(500, 'Can\'t process HTML file.')
          response.end();
          return;
        }
        response.writeHead(200);
        response.write(file);
        response.end();
      });
      break;
    }
    case '/authenticate': {
      let data = '';
      request.on('data', (chunk) => {
        data += chunk;
      });
      request.on('end', () => {
        const params = parse(data);
        response.writeHead(301, {
          Location: '/home',
        });
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

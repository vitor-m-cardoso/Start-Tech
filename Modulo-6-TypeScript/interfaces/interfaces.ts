interface Usuario {
  nome: string;
  email: string;
  address?: string;
}

function pegaUmUsuario(): Usuario {
  return {
    nome: 'Vitor',
    email: 'alguem@alguem.com'
  }
}

function setaUmUsuario(usuario: Usuario) {
  ///...exemplo
}
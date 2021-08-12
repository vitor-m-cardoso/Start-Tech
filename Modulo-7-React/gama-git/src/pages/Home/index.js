import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled.js';

export default function Home() {
  const [user, setUser] = useState('');

  const handleSearch = async () => {
    const response = await axios.get(`https://api.github.com/users/${user}/repos`);
    const { data } = response;
    const repoName = [];
    data.map((repository) => repoName.push(repository.name));
    
    localStorage.setItem('repositoriesName', JSON.stringify(repoName));
  }

  return (
    <S.Container>
      <S.Input
        name="user"
        className="inputUser"
        placeholder="Usuário"
        value={ user }
        onChange={({ target: { value } }) => setUser(value) }
      />
      <S.Button
        type="button"
        onClick={ handleSearch }
      >
        Pesquisar
      </S.Button>
    </S.Container>
  );
}

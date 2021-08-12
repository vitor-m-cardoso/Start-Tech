import React, { useEffect, useState } from 'react';
import * as S from './styled.js';

export default function Repositories() {
  const [renderRepositories, setRenderRepositories] = useState([]);


  useEffect(() => {
    let repoName = localStorage.getItem('repositoriesName');
    repoName = JSON.parse(repoName);
    setRenderRepositories(repoName);
    localStorage.clear();
  }, []);

  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>
      <S.List>
        { renderRepositories ? renderRepositories.map((repository) => {
          return (
            <S.ListItem>{ `Repositório: ${repository}` }</S.ListItem>
          )
        }) : <S.ListItem>Nenhum repositório encontrado...</S.ListItem> }
      </S.List>
    </S.Container>
  )
}

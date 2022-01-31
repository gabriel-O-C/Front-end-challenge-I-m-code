import React from 'react';
import * as S from './styles';

function Header() {
  return (
    <S.Header>
      <S.Menu>
        <S.MenuItem>
          <li>Início</li>
          <li>Projeto</li>
          <li>Contato</li>
          <li>Equipe</li>
        </S.MenuItem>
      </S.Menu>
    </S.Header>
  );
}

export default Header;

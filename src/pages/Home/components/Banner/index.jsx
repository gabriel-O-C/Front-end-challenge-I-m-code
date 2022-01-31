import React from 'react';
import * as S from './styles';
import Heading from '../Heading';

function Banner() {
  return (
    <S.Main>
      <S.Banner>
        <S.InfoText>Nós somos o futuro</S.InfoText>
        <Heading>
          Segurança do
          <br />
          {' '}
          Trabalho
        </Heading>
        <S.InfoText>
          O projeto destinado a revolucionar
          <br />
          {' '}
          a área de segurança do trabalho
        </S.InfoText>
      </S.Banner>
    </S.Main>
  );
}

export default Banner;

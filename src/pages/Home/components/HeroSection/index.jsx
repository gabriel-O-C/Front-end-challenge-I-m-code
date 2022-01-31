import React from 'react';
import * as S from './styles';
import Heading from '../Heading';
import bellIcon from '../../../../assets/bell.svg';
import lockIcon from '../../../../assets/lock.svg';
import checkedIcon from '../../../../assets/checked.svg';

function HeroSection() {
  return (
    <S.HeroSection>
      <S.Hero>
        <Heading>
          Praticidade
          <br />
          <span>
            Tudo o que você precisa
            <br />
            {' '}
            na palma da sua mão.
          </span>
        </Heading>
        <S.Info>
          Nosso aplicativo tem por objetivo proporcionar novas
          {' '}
          <br />
          experiências de controle dos equipamentos de proteção.
        </S.Info>
        <div>
          <S.Advantages>
            <img alt="lock icon" src={lockIcon} />
            <S.Info>Acesso Seguro</S.Info>
          </S.Advantages>
          <S.Advantages>
            <img alt="checked icon" src={checkedIcon} />
            <S.Info>Gestão de dados eficaz</S.Info>
          </S.Advantages>
          <S.Advantages>
            <img alt="bell icon" src={bellIcon} />
            <S.Info>Acompanhamento de pedidos em tempo real</S.Info>
          </S.Advantages>
        </div>
      </S.Hero>
    </S.HeroSection>
  );
}

export default HeroSection;

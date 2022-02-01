import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './styles.css';
import * as S from './styles';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = () => (
  <AutoplaySlider
    className="awssld__content slider"
    bullets={false}
    organicArrows={false}
    buttons={false}
    play
    cancellOnInteraction
    intervavl={6000}
  >
    <S.Card>
      <S.CardTitle>
        Opa, Você está perdido?
        <br />
        Relaxa, deixa eu te ajudar.
      </S.CardTitle>
      <S.CardInfo>
        Está função serve para registrar e mostrar as responsabilidades
        <br />
        Sobre o uso do EPI, vamos te conectar a um sistema muito simples.
      </S.CardInfo>
      <S.CardButton type="button">Cadastrar Colaborador</S.CardButton>
    </S.Card>
    <S.Card>
      <S.CardTitle>
        Opa, Você está perdido?
        <br />
        Relaxa, deixa eu te ajudar.
      </S.CardTitle>
      <S.CardInfo>
        Está função serve para registrar e mostrar as responsabilidades
        <br />
        Sobre o uso do EPI, vamos te conectar a um sistema muito simples.
      </S.CardInfo>
      <S.CardButton type="button">Cadastrar Colaborador</S.CardButton>
    </S.Card>
    <S.Card>
      <S.CardTitle>
        Opa, Você está perdido?
        <br />
        Relaxa, deixa eu te ajudar.
      </S.CardTitle>
      <S.CardInfo>
        Está função serve para registrar e mostrar as responsabilidades
        <br />
        Sobre o uso do EPI, vamos te conectar a um sistema muito simples.
      </S.CardInfo>
      <S.CardButton type="button">Cadastrar Colaborador</S.CardButton>
    </S.Card>
    <S.Card>
      <S.CardTitle>
        Opa, Você está perdido?
        <br />
        Relaxa, deixa eu te ajudar.
      </S.CardTitle>
      <S.CardInfo>
        Está função serve para registrar e mostrar as responsabilidades
        <br />
        Sobre o uso do EPI, vamos te conectar a um sistema muito simples.
      </S.CardInfo>
      <S.CardButton type="button">Cadastrar Colaborador</S.CardButton>
    </S.Card>

  </AutoplaySlider>
);

export default slider;

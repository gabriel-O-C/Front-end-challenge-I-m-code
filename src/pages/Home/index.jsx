import React from 'react';
import {
  Header, Banner, HeroSection, Heading, Slider, ServicesProvided,
} from './components';
import * as S from './styles';

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <HeroSection />
      <S.Container>
        <Heading>
          Várias funções em
          <br />
          um único lugar
        </Heading>
        <Slider />
      </S.Container>
      <S.Container>
        <Heading>Projeto</Heading>
        <ServicesProvided />
      </S.Container>
    </>
  );
}

export default Home;

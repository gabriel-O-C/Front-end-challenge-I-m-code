import React from 'react';
import * as S from './styles';

function Heading({ children }) {
  return (
    <S.Heading>
      {children}
    </S.Heading>
  );
}

export default Heading;

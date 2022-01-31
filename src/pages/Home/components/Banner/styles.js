import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  flex: 1;
`;

export const Banner = styled.section`
  background-color: ${(props) => props.theme.colors.blue};
  width: 50vw;
  border-bottom-right-radius: 15%;
  border-top-right-radius: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;

`;

export const InfoText = styled.p`
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 5px;
  font-size: 2.2rem;
`;

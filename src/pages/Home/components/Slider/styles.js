import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 80px;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

export const CardTitle = styled.h2`
  font-weight: bold;
  font-size: 2.2rem;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.white};
`;

export const CardInfo = styled.p`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 10px;

`;

export const CardButton = styled.button`
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.white};
  width: 300px;
  height: 30px;
  transition: .3s all smooth;

  :hover{
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  }
`;

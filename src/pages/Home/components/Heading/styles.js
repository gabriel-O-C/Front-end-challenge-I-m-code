import styled from 'styled-components';

export const Heading = styled.h1`
  color: ${(props) => props.theme.colors.black_text};
  font-size: 5.2rem;
  margin-bottom: 20px;
  font-weight: bold;

  span{
  color: ${(props) => props.theme.colors.blue};
  }
`;

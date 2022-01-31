import styled from 'styled-components';

export const Hero = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
`;

export const HeroSection = styled.section`
  display: flex;
  justify-content: right;
  margin-bottom: 20px;

`;

export const Info = styled.p`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.black_text};
  margin-bottom: 20px;
`;

export const Advantages = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: center;

  img{
    margin-right: 10px;
  }
`;

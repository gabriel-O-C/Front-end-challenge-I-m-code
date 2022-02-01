import styled from 'styled-components';

export const Banner = styled.section`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
`;
export const BannerBlack = styled.section`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.black};
  height: 80vh;
  border-bottom-left-radius: 10%;
  border-top-left-radius: 10%;


  h1,p{
    color: ${(props) => props.theme.colors.white};
  }
  p{
    font-size: 1.6rem;
    border: none;
    padding: 5px;
  }
  span{
    color: ${(props) => props.theme.colors.blue};

  }
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  margin-top: 30px;

`;

export const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 3.2rem;
  margin-top: 10px;
`;

export const Info = styled.p`
  border-left: 2px solid ${(props) => props.theme.colors.blue};
  font-size: 1.6rem;
  margin-left: 15px;
  padding: 5px;
`;

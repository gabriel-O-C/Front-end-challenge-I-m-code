import styled from 'styled-components';

export const Header = styled.header`
  margin-bottom: 30px;
`;

export const Menu = styled.nav``;

export const MenuItem = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-weight: bold;

  li{
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.text_black};
    padding: 5px;
    font-size: ${(props) => props.theme.typography.sizes.medium};
    margin-right: 10px;
    margin-left: 10px;
    border-bottom: 1px solid ${(props) => props.theme.colors.white};

      :hover{
      border-bottom: 1px solid ${(props) => props.theme.colors.blue};
      transition: all .3s smooth;
    }
  }
`;

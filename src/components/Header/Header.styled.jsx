import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background-color: ${props => props.theme.white};
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  min-width: 100px;
  min-height: 34px;
  border: none;
  border-radius: 80px;
  background-color: ${props => props.theme.primary};
`;

export const Link = styled.a`
  color: ${props => props.theme.black};

  font-size: 16px;
`;

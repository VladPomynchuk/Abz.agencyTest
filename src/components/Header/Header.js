import React from 'react';
import logo from 'svg/Logo.svg';
import { HeaderStyled, Nav, Button, Link, Box } from './Header.styled';
import { Container } from 'components/Container';

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Box>
          <img src={logo} alt="logo" />
          <Nav>
            <Link href="#users">
              <Button>Users</Button>
            </Link>
            <Link href="#sign">
              <Button>Sign up</Button>
            </Link>
          </Nav>
        </Box>
      </Container>
    </HeaderStyled>
  );
};

export default Header;

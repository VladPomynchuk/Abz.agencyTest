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
            <Button>
              <Link href="#users">Users</Link>
            </Button>
            <Button>
              <Link href="#sign">Sign up</Link>
            </Button>
          </Nav>
        </Box>
      </Container>
    </HeaderStyled>
  );
};

export default Header;

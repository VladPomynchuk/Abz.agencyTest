import styled from 'styled-components';
import { createTheme } from '@mui/material';

export const AddButton = styled.button`
  cursor: pointer;

  display: block;
  min-width: 100px;
  min-height: 34px;
  border: none;
  border-radius: 80px;
  background-color: ${props => props.theme.primary};

  margin-right: auto;
  margin-left: auto;

  :hover {
    background-color: ${props => props.theme.button.hover};
  }

  :disabled {
    background-color: ${props => props.theme.button.disable};
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 50px;
`;

export const Wrapper = styled.div`
  max-width: 380px;
  margin-left: auto;
  margin-right: auto;
`;

// Изменение шрифта в Material UI и цвета

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#00BDD3',
    },
  },
});

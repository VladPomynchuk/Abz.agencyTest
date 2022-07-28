import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 360px) {
    width: 360px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;

    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1024px) {
    width: 1024px;

    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1170px) {
    width: 1170px;

    padding-left: 0;
    padding-right: 0;
  }
`;

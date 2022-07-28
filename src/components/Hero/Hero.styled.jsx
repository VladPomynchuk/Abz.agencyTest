import styled from 'styled-components';
import bgcImage from 'images/pexels-alexandr-podvalny-1227513.jpeg';

export const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 71px;
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;

  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${bgcImage});
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 768px) {
    padding-top: 89px;
    padding-bottom: 88px;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 164px;
    padding-bottom: 163px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  line-height: 40px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  max-width: 380px;
  margin-bottom: 21px;
  color: ${props => props.theme.white};
`;

export const Text = styled.p`
  max-width: 380px;
  margin-bottom: 32px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  color: ${props => props.theme.white};
`;

export const Button = styled.button`
  display: block;
  min-width: 100px;
  min-height: 34px;
  border: none;
  border-radius: 80px;
  background-color: ${props => props.theme.primary};

  margin-right: auto;
  margin-left: auto;
`;

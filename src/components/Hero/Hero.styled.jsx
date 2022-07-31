import styled from 'styled-components';
import mobile from 'images/bgHero/mobile.jpg';
import mobile2x from 'images/bgHero/mobile@2x.jpg';
import tablet from 'images/bgHero/tablet.jpg';
import tablet2x from 'images/bgHero/tablet@2x.jpg';
import desktop from 'images/bgHero/desktop.jpg';
import desktop2x from 'images/bgHero/desktop@2x.jpg';
import bigDesktop from 'images/bgHero/desktop+.jpg';
import bigDesktop2x from 'images/bgHero/desktop+@2x.jpg';

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
    url(${mobile});
  background-size: cover;
  background-position: center;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${mobile2x});
  }

  @media screen and (min-width: 768px) {
    padding-top: 89px;
    padding-bottom: 88px;
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${tablet});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ),
        url(${tablet2x});
    }
  }

  @media screen and (min-width: 1024px) {
    padding-top: 164px;
    padding-bottom: 163px;
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${desktop});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ),
        url(${desktop2x});
    }
  }

  @media screen and (min-width: 1170px) {
    padding-top: 164px;
    padding-bottom: 163px;
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${bigDesktop});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ),
        url(${bigDesktop2x});
    }
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
  cursor: pointer;

  display: block;
  min-width: 100px;
  min-height: 34px;
  border: none;
  border-radius: 80px;
  background-color: ${props => props.theme.primary};

  :hover {
    background-color: ${props => props.theme.button.hover};
  }

  margin-right: auto;
  margin-left: auto;
`;

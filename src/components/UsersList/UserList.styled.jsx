import styled from 'styled-components';

export const Section = styled.section`
  margin-left: auto;
  margin-right: auto;
  padding-top: 140px;
  padding-bottom: 70px;
`;

export const Title = styled.h2`
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 50px;
`;

export const List = styled.ul`
  margin-bottom: 50px;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1024px) {
    gap: 29px;
  }
`;

export const Button = styled.button`
  cursor: pointer;

  min-width: 100px;
  min-height: 34px;
  border: none;
  border-radius: 80px;
  padding-left: 19px;
  padding-right: 18px;
  background-color: ${props => props.theme.primary};

  :hover {
    background-color: ${props => props.theme.button.hover};
  }
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

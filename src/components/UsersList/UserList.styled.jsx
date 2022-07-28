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
  background-color: ${props => props.theme.white};

  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  margin-bottom: 50px;
`;

export const Button = styled.button`
  min-width: 100px;
  min-height: 34px;
  border: none;
  border-radius: 80px;
  background-color: ${props => props.theme.primary};
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

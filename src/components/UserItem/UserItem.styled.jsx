import styled from 'styled-components';

export const Item = styled.li`
  background-color: ${props => props.theme.white};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media screen and (min-width: 768px) {
    width: calc((100% / 2) - 8px);
  }

  @media screen and (min-width: 1024px) {
    width: calc((100% / 3) - 19.333px);
  }

  @media screen and (min-width: 1200px) {
    width: calc((100% / 3) - 20px);
  }
`;

export const Box = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Name = styled.p`
  width: 100%;

  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
  cursor: pointer;
`;

export const Text = styled.p`
  width: 100%;

  cursor: pointer;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
`;

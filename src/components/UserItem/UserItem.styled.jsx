import styled from 'styled-components';

export const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Box = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Name = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
`;

export const Text = styled.p`
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
`;

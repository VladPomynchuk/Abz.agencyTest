import { CircularProgress } from '@mui/material';
import styled from 'styled-components';

const Box = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
`;

const Loader = () => {
  return (
    <Box>
      <CircularProgress />
    </Box>
  );
};

export default Loader;

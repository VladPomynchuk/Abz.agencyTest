import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import styled from 'styled-components';

export const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip placement="bottom" {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: '16px',
    lineHeight: '24px',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.87)',
    fontFamily: 'Nunito',
    padding: '3px 16px 3px 16px',
    textAlign: 'center',
  },
});

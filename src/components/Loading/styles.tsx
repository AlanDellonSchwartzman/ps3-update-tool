import styled from 'styled-components';
import RotateRightRoundedIcon from '@mui/icons-material/RotateRightRounded';

export const Loading = styled(RotateRightRoundedIcon).attrs(() => ({
  color: 'secondary'
}))`
  animation: rotation 1s linear infinite;

  @keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
`
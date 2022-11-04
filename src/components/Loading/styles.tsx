import styled from '@emotion/styled';
import RotateRightRoundedIcon from '@mui/icons-material/RotateRightRounded';

export const Loading = styled(RotateRightRoundedIcon)`
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
Loading.defaultProps = {
  color: 'secondary',
};

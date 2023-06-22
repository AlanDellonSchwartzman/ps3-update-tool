import styled from '@emotion/styled';
import RefreshIcon from '@mui/icons-material/Refresh';

export const Loading = styled(RefreshIcon)`
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

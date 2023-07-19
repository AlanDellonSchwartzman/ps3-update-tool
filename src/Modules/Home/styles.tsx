import { Container, Box } from '@mui/material';
import styled from '@emotion/styled';

export const ContainerStyled = styled(Container)`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 4% 5% 1% 5%;
`;
ContainerStyled.defaultProps = { maxWidth: 'lg' };

export const BoxContainer = styled(Box)`
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: row;
  height: 100%;
  width: 100%;
  position: relative;
  padding: 25px;
  background: rgba(255, 255, 255, 0.09);
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  overflow-x: hidden;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Content = styled(Box)`
  flex: 1;
  align-self: center;
  align-items: center;
  flex-direction: column;
`;

export const ContentUpdates = styled(Box)`
  flex: 1;
  align-self: center;
  align-items: center;
  flex-direction: column;

  animation-name: show;
  animation-duration: 2s;

  @keyframes show {
    from {
      margin-right: -500px;
    }
    to {
      margin-right: 0;
    }
  }

  @media (max-width: 768px) {
    margin-top: 25px;
  }
`;

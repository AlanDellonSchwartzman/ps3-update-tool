import styled from 'styled-components';
import { Container, Box } from '@mui/material';

export const ContainerStyled = styled(Container).attrs({
  maxWidth: 'lg',
})`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 4% 5% 1% 5%;
`;

export const BoxContainer = styled(Box)`
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: relative;
  padding: 25px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

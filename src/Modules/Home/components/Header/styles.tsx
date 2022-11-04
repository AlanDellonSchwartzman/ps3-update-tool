import styled from 'styled-components';
import Image from 'next/image';
import { Box } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  flex: 1;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const Logo = styled(Image).attrs({
  priority: true,
  src: '/images/logo.svg',
  alt: 'Vercel Logo',
  width: 200,
  height: 200,
})``;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 3px 3px 9px rgba(0, 0, 0, 0.3);
  text-align: center;
  margin-top: 10px;
`;

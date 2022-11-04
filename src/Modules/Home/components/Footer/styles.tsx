import styled from 'styled-components';
import Image from 'next/image';
import { Box } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  position: relative;
  align-items: center;
  margin-top: 20px;
`;

export const GitHubIcon = styled(Image).attrs({
  src: '/images/github.svg',
  alt: 'Vercel Logo',
  width: 82,
  height: 26,
})``;

export const Link = styled.a.attrs({
  href: 'https://github.com/AlanDellonSchwartzman/ps3-update-tool',
  target: '_blank',
  rel: 'noopener noreferrer',
})``;

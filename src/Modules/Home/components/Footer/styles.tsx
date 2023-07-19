import styled from '@emotion/styled';
import Image from 'next/image';
import { Box } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  position: relative;
  align-items: center;
  margin-top: 20px;
`;

export const Link = styled.a``;
Link.defaultProps = {
  href: 'https://github.com/AlanDellonSchwartzman/ps3-update-tool',
  target: '_blank',
  rel: 'noopener noreferrer',
};

export const GitHubIcon = styled(Image)``;
GitHubIcon.defaultProps = {
  alt: 'GitHubIcon',
  width: 82,
  height: 26,
};

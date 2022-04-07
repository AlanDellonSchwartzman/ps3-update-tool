import styled from 'styled-components';
import GithubImage from '../../../../assets/github.svg';

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: 3vmin;
  height: 0;
`;

export const GithubLink = styled.a.attrs(() => ({
  href: 'https://github.com/AlanDellonSchwartzman/ps3-update-tool',
}))``;

export const GithubIcon = styled.img.attrs(() => ({
  src: GithubImage,
}))`
  width: 3.5vmin;
  height: 3.5vmin;
  vertical-align: middle;
`;

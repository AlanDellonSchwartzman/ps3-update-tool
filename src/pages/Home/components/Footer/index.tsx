import React from 'react';

import { Container, GithubIcon, GithubLink } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <GithubLink>
        <GithubIcon />
      </GithubLink>
    </Container>
  );
};

export default Footer;

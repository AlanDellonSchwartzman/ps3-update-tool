import React from 'react';

import { Container, GitHubIcon, Link } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Link>
        <GitHubIcon src="/images/github.svg" />
      </Link>
    </Container>
  );
};

export default Footer;

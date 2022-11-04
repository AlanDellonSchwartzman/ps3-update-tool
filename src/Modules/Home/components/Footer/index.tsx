import React from 'react';

import { Container, GitHubIcon, Link } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Link>
        <GitHubIcon />
      </Link>
    </Container>
  );
};

export default Footer;

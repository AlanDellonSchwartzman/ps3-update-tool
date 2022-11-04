import React from 'react';

import { Container, Logo, Title } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo />
      <Title>
        PS3 Update Tool
      </Title>
    </Container>
  );
};

export default Header;
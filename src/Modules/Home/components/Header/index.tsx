import React from 'react';

import { Container, Logo, Title } from './styles';

const Header = (): JSX.Element => {
  return (
    <Container>
      <Logo src='/images/logo.svg' />
      <Title>PS3 Update Tool</Title>
    </Container>
  );
};

export default Header;

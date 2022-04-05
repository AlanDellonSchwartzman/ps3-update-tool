import React from 'react';
import Card from './components/Card';
import Footer from './components/Footer';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Card />
      <Footer />
    </Container>
  );
};

export default Home;

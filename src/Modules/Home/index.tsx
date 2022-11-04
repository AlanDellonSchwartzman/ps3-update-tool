import React from 'react';

import { ContainerStyled, BoxContainer } from './styles';
import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';

const Home = (): JSX.Element => {
  return (
    <ContainerStyled>
      <BoxContainer>
        <Header />
        <Search />
      </BoxContainer>

      <Footer />
    </ContainerStyled>
  );
};

export default Home;

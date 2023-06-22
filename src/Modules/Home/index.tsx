import React, { useState } from 'react';
import { SnackbarProvider, enqueueSnackbar, VariantType } from 'notistack';

import fetchUpdates from '../../utils/fetchUpdates';
import IUpdate from '../../models/IUpdate';

import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';
import UpdateList from './components/UpdateList';

import {
  ContainerStyled,
  BoxContainer,
  Content,
  ContentUpdates,
} from './styles';

interface GameUpdatesProps {
  title: string;
  updates: IUpdate[];
}

const Home = (): JSX.Element => {
  const [gameUpdates, setGameUpdates] = useState<GameUpdatesProps | null>(null);
  const [loading, setLoading] = useState(false);

  const showAlert = ({
    message = 'Something went wrong, please try again in a few moments.',
    variant = 'warning',
  }: { message?: string; variant?: VariantType } = {}) => {
    enqueueSnackbar({ message, variant });
  };

  const getUpdates = async ({ serial }: { serial: string }) => {
    if (!(serial != '') || !serial || serial.length < 9)
      return showAlert({ message: 'Please enter a serial valid.' });

    setLoading(true);
    const updates = await fetchUpdates({ serial });

    if (updates?.error) showAlert({ message: updates.error, variant: 'error' });
    else if (!updates?.updates?.length)
      showAlert({ message: 'No updates avaliable.', variant: 'error' });

    setGameUpdates(updates);
    setLoading(false);
  };

  return (
    <>
      <SnackbarProvider maxSnack={3} />
      <ContainerStyled>
        <BoxContainer>
          <Content>
            <Header />
            <Search loading={loading} fetchUpdates={getUpdates} />
          </Content>
          {gameUpdates && gameUpdates.updates?.length > 0 && (
            <ContentUpdates>
              <UpdateList
                name={gameUpdates.title}
                updates={gameUpdates.updates}
                loading={loading}
              />
            </ContentUpdates>
          )}
        </BoxContainer>
        <Footer />
      </ContainerStyled>
    </>
  );
};

export default Home;

import React, { useState } from 'react';

import IUpdate from '../../../../models/IUpdate';

import { Container, ContainerLoading, Content, GameTitle } from './styles';
import Table from './components/Table';
import Loading from '../../../../components/Loading';

const UpdateList = ({
  name,
  updates,
  loading,
}: {
  name: string;
  updates: IUpdate[];
  loading: boolean;
}): JSX.Element => {
  return (
    <Container>
      {loading ? (
        <ContainerLoading>
          <Loading style={{ fontSize: 30 }} />
        </ContainerLoading>
      ) : (
        <Content>
          <GameTitle>{name}</GameTitle>
          <Table updates={updates} />
        </Content>
      )}
    </Container>
  );
};

export default UpdateList;

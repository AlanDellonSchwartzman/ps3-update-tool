import React from 'react';
import Loading from '../../../../components/Loading';

import { Container, Content, InputText, Button, DownloadIcon } from './styles';

const Search = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <InputText />
        <Button disabled>
          {/* <DownloadIcon /> */}
          <Loading />
        </Button>
      </Content>
    </Container>
  );
};

export default Search;

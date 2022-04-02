import React, { useState } from 'react';
import getUpdateUrl from '../../utils/getUpdateUrl';

import {
  Container,
  Content,
  Logo,
  Input,
  Title,
  Header,
  Footer,
  ButtonDownload,
  InputContainer,
  DownloadIcon,
} from './styles';

const Home: React.FC = () => {
  const [textInput, setTextInput] = useState('' as string);
  const [disabled, setDisabled] = useState(false);
  const [updateLinks, setUpdateLinks] = useState(null);

  const onChangeText = (e: React.FormEvent<HTMLInputElement>) => {
    setTextInput(e.currentTarget.value.toUpperCase());
  };

  const handleDownload = () => {
    setDisabled(true);

    fetchUpdates();
  };

  const fetchUpdates = async () => {
    const links = await getUpdateUrl({ serial: textInput });
    setDisabled(false);

    downloadUpdate(links[links.length - 1].url);
  };

  const downloadUpdate = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <Container>
      <Content>
        <Header>
          <Logo />
          <Title>PS3 Update Tool</Title>
        </Header>
        <Footer>
          <InputContainer>
            <Input disabled={disabled} onChange={onChangeText} />
            <ButtonDownload onClick={handleDownload} disabled={disabled}>
              <DownloadIcon />
            </ButtonDownload>
          </InputContainer>
        </Footer>
      </Content>
    </Container>
  );
};

export default Home;

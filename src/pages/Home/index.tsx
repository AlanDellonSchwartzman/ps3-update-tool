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
  const [textInput, setTextInput] = useState('');
  const [disabled, setDisabled] = useState(false);

  interface EventProps {
    target: {
      value: string;
    };
  }

  const onChangeText = (e: EventProps) => {
    setTextInput(e.target.value);
  };

  const handleDownload = () => {
    setDisabled(true);

    getUpdateUrl({ serial: textInput });

    setDisabled(false);
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
            <ButtonDownload onClick={handleDownload} disablad={disabled}>
              <DownloadIcon />
            </ButtonDownload>
          </InputContainer>
        </Footer>
      </Content>
    </Container>
  );
};

export default Home;

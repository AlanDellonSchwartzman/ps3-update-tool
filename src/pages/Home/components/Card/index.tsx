import React, { useState } from 'react';
import Loading from '../../../../components/Loading';

import getUpdateUrl from '../../../../utils/getUpdateUrl';

import {
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

const Card: React.FC = () => {
  const [textInput, setTextInput] = useState('' as string);
  const [disabled, setDisabled] = useState(false);

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

    if (links) downloadUpdate(links[links.length - 1].url);
  };

  const downloadUpdate = (url: string) => {
    const a = document.createElement('a');
    a.href = url.replace('http', 'https');
    a.click();
    window.URL.revokeObjectURL(url);
    // window.open('', '_blank');
    // window.location.href = url.replace('');
  };

  const RenderDownloadButton = () => (
    <ButtonDownload onClick={handleDownload} disabled={disabled}>
      {disabled ? <Loading /> : <DownloadIcon />}
    </ButtonDownload>
  );

  return (
    <>
      <Content>
        <Header>
          <Logo />
          <Title>PS3 Update Tool</Title>
        </Header>
        <Footer>
          <InputContainer>
            <Input disabled={disabled} onChange={onChangeText} />
            <RenderDownloadButton />
          </InputContainer>
        </Footer>
      </Content>
    </>
  );
};

export default Card;

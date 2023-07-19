import React, { useState } from 'react';

import { Container, Content, InputText, Button, SubmitIcon } from './styles';

interface SearchProps {
  loading: boolean;
  fetchUpdates: Function;
}

const Search = ({ loading, fetchUpdates }: SearchProps): JSX.Element => {
  const [textInput, setTextInput] = useState('' as string);

  const onChangeText = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setTextInput(e.currentTarget.value.toUpperCase());
  };

  return (
    <Container>
      <Content>
        <InputText onChange={onChangeText} />
        <Button
          onClick={() => fetchUpdates({ serial: textInput })}
          loading={loading}
        >
          <SubmitIcon />
        </Button>
      </Content>
    </Container>
  );
};

export default Search;

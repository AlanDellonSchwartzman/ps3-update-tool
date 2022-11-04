import styled from 'styled-components';
import { Box, Input, IconButton } from '@mui/material';
import { Download } from '@mui/icons-material'

export const Container = styled(Box)`
  display: flex;
  position: relative;
  flex: 1;
  align-items: center;
`;

export const Content = styled(Box)`
  display: flex;
  position: relative;
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
  padding: 5px;
  border-radius: 50px;
  background-color: #fff;
  height: 50px;
  border: solid black 1px;
`;

export const InputText = styled(Input).attrs((props) => ({
  placeholder: 'NPUB31419',
  // disabled: props.disabled,
  // onChange: props.onChange,
  autoFocus: true, 
  // fullWidth: true,
  autoComplete: 'serial',
  name: 'serial',
  fullWidth: true,
  enterKeyHint: 'next',
  disableUnderline: true,
  inputProps: { maxLength: 9 },
}))`
  /* padding: 6px 10px 5px 10px; */
  padding-left: 10px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  font-size: 3vmin;
  -webkit-appearance: none;

  input {
    text-transform: uppercase;
  }

  :disabled {
    cursor: not-allowed;
  }
`;

export const Button = styled(IconButton).attrs((props) => ({
  loading: true,
  // disabled: true,
  color: 'secondary',
}))`
  :disabled {
    cursor: progress;
  }
`;

export const DownloadIcon = styled(Download)`
`;
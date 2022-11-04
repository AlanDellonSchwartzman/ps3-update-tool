import styled from '@emotion/styled';
import { Box, Input, IconButton } from '@mui/material';
import { Download } from '@mui/icons-material';

export const Container = styled(Box)`
  display: flex;
  position: relative;
  flex: 1;
  align-items: center;
`;

export const Content = styled(Box)`
  display: flex;
  position: relative;
  padding: 5px;
  border-radius: 50px;
  background-color: #fff;
  height: 50px;
  border: solid black 1px;
`;

export const InputText = styled(Input)`
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
InputText.defaultProps = {
  placeholder: 'NPUB31419',
  // disabled: props.disabled,
  // onChange: props.onChange,
  autoFocus: true,
  autoComplete: 'serial',
  name: 'serial',
  fullWidth: true,
  disableUnderline: true,
  inputProps: { maxLength: 9 },
};

export const Button = styled(IconButton)`
  :disabled {
    cursor: progress;
  }
`;
Button.defaultProps = {
  color: 'secondary',
};

export const DownloadIcon = styled(Download)``;

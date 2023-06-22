import styled from '@emotion/styled';
import { Box, Input, IconButton } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';

export const Container = styled(Box)`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const Content = styled(Box)`
  display: flex;
  position: relative;
  padding: 5px;
  border-radius: 50px;
  background-color: #fff;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.7);
`;

export const InputText = styled(Input)`
  padding-left: 10px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  font-size: 3vmin;
  /* appearance: none; */

  input {
    text-transform: uppercase;
  }

  :disabled {
    cursor: not-allowed;
  }
`;
InputText.defaultProps = {
  placeholder: 'NPUB31419',
  autoFocus: true,
  autoComplete: 'serial',
  name: 'serial',
  fullWidth: true,
  disableUnderline: true,
  inputProps: { maxLength: 9 },
};

export const Button = styled(LoadingButton)`
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  min-width: 40px;

  :disabled {
    cursor: progress;
  }
`;
Button.defaultProps = {
  color: 'secondary',
};

export const SubmitIcon = styled(ArrowForward)``;

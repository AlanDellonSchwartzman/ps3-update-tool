import styled from 'styled-components';

import LogoImage from '../../assets/logo.svg';
import DownloadImage from '../../assets/download-icon.svg';

interface InputProps {
  onChange: Function;
  disabled: boolean;
}

interface ButtonProps {
  onClick: Function;
  disabled: boolean;
}

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100vw;
  height: 100vh;
  background-color: #776fbf;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  justify-content: space-around;
  height: 85%;
  width: 70%;
  border-radius: 10px;

  -webkit-box-shadow: 0px 10px 26px 3px rgba(0, 0, 0, 0.26);
  box-shadow: 0px 10px 26px 3px rgba(0, 0, 0, 0.26);
`;

export const Header = styled.div`
  display: flex;
  flex: 1.35;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 25px;
  width: 100%;
`;

export const Logo = styled.img.attrs(() => ({
  src: LogoImage,
}))`
  width: 30vmin;
  height: 30vmin;
  margin-bottom: 25px;
`;

export const Title = styled.span`
  font-size: 5vmin;
  font-weight: bold;
  text-shadow: 3px 3px 9px rgba(0, 0, 0, 0.29);
  text-align: center;
`;

export const Footer = styled.div`
  display: flex;
  flex: 0.8;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  height: 6.5vmin;
  border-radius: 50px;
  background-color: white;
  border: 1px solid black;
`;

export const Input = styled.input.attrs((props: InputProps) => ({
  placeholder: 'NPUB31419',
  disabled: props.disabled,
  onChange: props.onChange,
  maxLength: 9,
  autoFocus: true,
  autoComplete: 'serial',
  name: 'serial',
  enterKeyHint: 'next',
}))<InputProps>`
  width: 80%;
  padding: 10px 10px;
  border: 0.1px;
  outline: none;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  text-transform: uppercase;
  font-size: 3.2vmin;

  :disabled {
    cursor: 'not-allowed';
  }
`;

export const ButtonDownload = styled.button.attrs((props: ButtonProps) => ({
  onClick: props.onClick,
  disabled: props.disabled,
}))<ButtonProps>`
  width: 20%;
  border: none;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left: 0.5px solid gray;
  background-color: #776fbf;
  cursor: pointer;

  :disabled {
    background-color: rgb(76, 39, 141);
    cursor: not-allowed;
  }

  :active {
    background-color: #645199;
  }
`;

export const DownloadIcon = styled.img.attrs(() => ({
  src: DownloadImage,
}))`
  padding-top: 3px;
  width: 80%;
  height: 80%;
`;

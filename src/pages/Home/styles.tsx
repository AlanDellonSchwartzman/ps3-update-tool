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
  background-color: rgb(76, 39, 141);
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
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 25px;
`;

export const Logo = styled.img.attrs(() => ({
  src: LogoImage,
}))`
  width: 80%;
  height: 80%;
  margin-bottom: 25px;
`;

export const Title = styled.span`
  font-size: 36px;
  font-weight: bold;
  text-shadow: 3px 3px 9px rgba(0, 0, 0, 0.29);
`;

export const Footer = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 35px;
  border-radius: 50px;
  background-color: white;
  border: 1px solid black;
`;

export const Input = styled.input.attrs((props: InputProps) => ({
  placeholder: 'NPUB31419',
  disabled: props.disabled,
  onChange: props.onChange,
}))<InputProps>`
  width: 80%;
  padding: 15px 10px;
  border: 0.1px;
  outline: none;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  font-size: 22px;
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
  cursor: ${(props: ButtonProps) =>
    props.disabled ? 'not-allowed' : 'pointer'};
  background-color: ${(props: ButtonProps) =>
    props.disabled ? '#645199' : '#a686fb'};

  :active {
    background-color: #846ebf;
  }
`;

export const DownloadIcon = styled.img.attrs(() => ({
  src: DownloadImage,
}))`
  padding-top: 3px;
  width: 80%;
  height: 80%;
`;

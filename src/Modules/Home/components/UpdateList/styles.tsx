import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const Container = styled(Box)`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: #4e34c9 #d0d0d0;

  /* Chrome, Edge and Safari */
  *::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    margin-left: -10px;
  }
  *::-webkit-scrollbar-track {
    border-radius: 15px;
    background-color: #d0d0d0;
  }

  *::-webkit-scrollbar-track:hover {
    background-color: #cbd4d6;
  }

  *::-webkit-scrollbar-track:active {
    background-color: #c2cbcd;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background-color: #4e34c9;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: #6634c9;
  }

  *::-webkit-scrollbar-thumb:active {
    background-color: #522aa1;
  }
`;

export const ContainerLoading = styled(Box)`
  width: 70%;
  min-height: 45vh;
  max-height: 45vh;
  border-radius: 15px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled(Box)`
  padding: 5px;
  width: 70%;
  min-height: 45vh;
  max-height: 45vh;
  border-radius: 15px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.6);
  overflow: hidden;
`;

export const GameTitle = styled.h3`
  text-align: center;
  padding: 5px;
  padding-bottom: 0;
  margin: 0;
`;

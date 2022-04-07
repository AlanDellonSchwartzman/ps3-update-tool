import styled from 'styled-components';

export const Container = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #4F458D;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

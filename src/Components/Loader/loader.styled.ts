import styled from "styled-components";

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingSvgContainer = styled.div`
  width: 100px;
  height: 100px;
  animation: rotateAnimation 3s linear infinite;
  color:rgba(17, 17, 17, 0.6);
  @keyframes rotateAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingPhrase = styled.p`
  font-size: 36px;
  font-weight: 600;
  color:rgba(17, 17, 17, 0.6);
  @media screen and (min-width: 768px) {
    font-size: 64px;
  }
`;

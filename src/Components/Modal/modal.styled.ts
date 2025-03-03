import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1200;
  padding: 20px;
  overflow: auto;
  pointer-events: auto;
`;

export const Modal = styled.div`
  position: relative;
  overflow: auto;
  pointer-events: auto;
  border-radius: 20px;
  width: auto;

  background-color: white;
  z-index: 1201;

  @media screen and (width < 768px) {
    width: 280px;
  }
`;

export const ModalCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  border-radius: 50%;
  background-color: #fdf7f2;

  width: 34px;
  height: 34px;
`;

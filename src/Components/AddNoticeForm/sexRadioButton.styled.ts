import styled from "styled-components";

export const SexList = styled.fieldset`
  margin-top: 16px;
  border: none;
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const SexIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const SexLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const PassiveSexText = styled.span`
  font-size: 18px;
  font-size: 500;
  color: #000;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
export const ActiveSexText = styled.span`
  font-size: 18px;
  font-size: 500;
  color: rgba(245, 146, 86, 1);
  @media screen and (min-width: 768px) {
    font-size: 20px;
  };
`;

export const SexRadio = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

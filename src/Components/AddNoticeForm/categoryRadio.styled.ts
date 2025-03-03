import styled from "styled-components";

export const CategoryRadioList = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  border: none;
  gap: 8px;
  padding: 0;
`;
export const ActiveRadioLabel = styled.label`
  border: 2px solid #f59256;
  background-color: #f59256;
  border-radius: 40px;

  padding: 8px 28px;
  text-align: center;

  color: white;

  font-size: 20px;
  font-weight: 500;
`;
export const PassiveRadioLabel = styled.label`
  border: 2px solid #f59256;
  background-color: transparent;
  border-radius: 40px;

  padding: 8px 28px;
  text-align: center;
  
  color: black;
  font-size: 20px;
  font-weight: 500;
`;
export const CategoryRadioInput = styled.input`
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

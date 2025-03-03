import styled from "styled-components";

export const FormInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  max-width: 280px;
  padding: 12px 14px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  background-color: transparent;
  ::placeholder {
    color: rgba(17, 17, 17, 0.6);
    font-weight: 400px;
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    max-width: 448px;
  }
`;

export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 280px;
  margin-bottom: 40px;
`;

export const FormListItem = styled.li`
  width: 100%;
  max-width: 280px;
  @media screen and (min-width: 768px) {
    max-width: 448px;
  }
`;

export const FormLabel = styled.label`
  width: 100%;
  max-width: 280px;
  position: relative;
`;

export const InputContainer = styled.div`
  position: relative;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    max-width: 448px;
  }
`;



export const SpecialFieldError = styled.p`
  margin-top: 4px;
  margin-left: 32px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(60, 188, 129, 1);
`;



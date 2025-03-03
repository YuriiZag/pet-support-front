import styled from "styled-components";
import { FormInput } from "../FormElements/FormElements.styled";

export const PetModalContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 608px;
  }
`;

export const AddPetHeading = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const AddPetContainer = styled.form`
  padding: 28px 20px 40px 20px;

  @media screen and (min-width: 768px) {
    padding: 40px 80px;
  }
`;

export const AddPetList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-bottom: 40px;
`;

export const AddPetInput = styled(FormInput)`
  margin-top: 8px;
`;

export const AddPetLabel = styled.label`
  width: 100%;
  max-width: 280px;
  position: relative;

  font-size: 18px;
  font-weight: 500;

`;

export const PetAvatarLabel = styled.label`
  font-size: 18px;
  font-weight: 500;
`

export const PetAvatarContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

export const AddPetButtonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const AddPetTextArea = styled.textarea`
  width: calc(100% - 40px);
  height: 100px;
  resize: none;

  margin-top: 8px;
  padding: 12px 14px;

  border-radius: 20px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  background-color: rgb(253, 247, 242);

  ::placeholder {
    font-size: 14px;
    font-weight: 400;
    color: rgba(17, 17, 17, 0.6);
  }
`;

export const AddPetNextButton = styled.button.attrs({
  type: "button",
})`
  border: 2px solid #f59256;
  background-color: #f59256;
  border-radius: 40px;

  padding: 9px;
  text-align: center;

  width: 100%;
  color: white;

  font-size: 20px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    width: 180px;
  }
`;

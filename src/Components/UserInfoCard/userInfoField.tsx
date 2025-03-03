import { useState } from "react";
import {
  UserInfoLabel,
  UserInfoWrapper,
  UserInfoEdit,
  UserEditForm,
  UserEditInput,
  InfoFieldContainer,
} from "./userInfoField.styled";
import { IoPencilSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

import { IUpdateField } from "./userInfoCard";

interface IInfoFieldProps{
  fieldName: string;
  fieldLabel: string;
  fieldData: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  updateField: IUpdateField;
  handleUserUpdate: (data: Record<string, string>) => void;
  objectKey: string;
  type?: string;
}


export const UserInfoField = ({
  fieldName,
  fieldLabel,
  fieldData,
  handleClick,
  updateField,
  handleUserUpdate,
  objectKey,
  type="text"
} : IInfoFieldProps) => {
  const [inputValue, setInputValue] = useState<string>(fieldData);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUserUpdate({[objectKey]: inputValue})
    
};

  return (
    <InfoFieldContainer>
      <UserInfoLabel>{fieldLabel}</UserInfoLabel>
      {updateField.updateFieldName !== fieldName ? (
        <>
          <UserInfoWrapper>{inputValue}</UserInfoWrapper>
          <UserInfoEdit
            id={fieldName}
            type="button"
            onClick={handleClick}
            disabled={updateField.isUpdating}
            style={
              !updateField.isUpdating
                ? { color: "rgba(245, 146, 86, 1)" }
                : { color: "rgba(17, 17, 17, 0.6)" }
            }
          >
            <IoPencilSharp
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </UserInfoEdit>
        </>
      ) : (
        <UserEditForm onSubmit={handleSubmit}>
          <UserEditInput
            type={type}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <UserInfoEdit type="submit">
            <FaCheck
              style={{
                width: "100%",
                height: "100%",
                color: "rgba(245, 146, 86, 1)",
              }}
            />
          </UserInfoEdit>
        </UserEditForm>
      )}
    </InfoFieldContainer>
  );
};



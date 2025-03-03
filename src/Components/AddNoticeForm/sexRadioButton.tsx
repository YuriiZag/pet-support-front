import { IoMdFemale } from "react-icons/io";
import { IoMdMale } from "react-icons/io";
import {
  SexList,
  SexRadio,
  SexLabel,
  PassiveSexText,
  ActiveSexText,
  SexIconContainer,
} from "./sexRadioButton.styled";
import { ICreatedNotice } from "../../interfaces/noticeIntefaces";

interface ISexProps {
  formData: ICreatedNotice;
  setFormData: (notice: ICreatedNotice) => void;
}
export const SexRadioButton = ({ formData, setFormData }: ISexProps) => {
  return (
    <SexList>
      <SexLabel htmlFor="male">
        <SexIconContainer>
          <IoMdMale
            style={{
              color: "rgba(35, 194, 239, 1)",
              width: "100%",
              height: "100%",
            }}
          />
        </SexIconContainer>
        <SexRadio
          name="sex"
          id="male"
          type="radio"
          value="male"
          onChange={(e) => setFormData({ ...formData, sex: e.target.value })}
        />
        {formData.sex === "male" ? (
          <ActiveSexText>Male</ActiveSexText>
        ) : (
          <PassiveSexText>Male</PassiveSexText>
        )}
      </SexLabel>
      <SexLabel htmlFor="female">
        <SexIconContainer>
          <IoMdFemale
            style={{
              color: "rgba(255, 135, 135, 1)",
              width: "100%",
              height: "100%",
            }}
          />
        </SexIconContainer>
        <SexRadio
          id="female"
          name="sex"
          type="radio"
          value="female"
          onChange={(e) => setFormData({ ...formData, sex: e.target.value })}
        />
        {formData.sex === "female" ? (
          <ActiveSexText>Female</ActiveSexText>
        ) : (
          <PassiveSexText>Female</PassiveSexText>
        )}
      </SexLabel>
    </SexList>
  );
};



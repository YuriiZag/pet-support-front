import { useState } from "react";
import {
  SpecialFieldError,
  FormListItem,
  InputContainer,
} from "../FormElements/FormElements.styled";
import * as yup from "yup";
import { MainButton, SecondaryButton } from "../Button/button.styled";
import {
  AddPetButtonList,
  AddPetContainer,
  AddPetHeading,
  AddPetInput,
  AddPetLabel,
  AddPetList,
  AddPetNextButton,
  AddPetTextArea,
  PetAvatarContainer,
  PetAvatarLabel,
  PetModalContainer,
} from "./addPetForm.styled";
import { DropZone } from "../Dropzone/dropzone";
import { addPets } from "../../api/petsAPI";
import { getUser } from "../../Redux/selectors";
import { FormMark } from "../FornMarks/formMarks";
import birthDayNormalizer from "../../Helpers/birthdayNormalizer";
import {
  addPetFirstSchema,
  addPetSecondSchema,
} from "../../validationSchemas/addPetSchema";
import { IPet } from "../../interfaces/petInterface";
import { IError } from "../../interfaces/errorInterface";
import { useAppSelector } from "../../customHooks/customHooks";
import axios, { AxiosError } from "axios";
import { errorToastEmitter, succesToastEmitter } from "../Toaster/toaste";

interface IAddPetProps {
  toggleModal: () => void;
  handleData: (data: IPet) => void;
}

interface IFormdata {
  name: string;
  birthDate: string;
  breed: string;
  avatar: string;
  comments: string;
  owner: string;
}

export const AddPetForm = ({ toggleModal, handleData }: IAddPetProps) => {
  const user = useAppSelector(getUser);
  if (user === null) {
    throw new Error();
  }
  const errorInitalState = {
    message: "",
    status: null,
  };
  const initialState = {
    name: "",
    birthDate: "",
    breed: "",
    avatar: "",
    comments: "",
    owner: user._id,
  };
  const [formData, setFormData] = useState<IFormdata>(initialState);
  const [formStageState, setFormStageState] = useState<boolean>(false);
  const [error, setError] = useState<IError | AxiosError>(errorInitalState);

  const formStageHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === "Next") {
      try {
        await addPetFirstSchema.validate(formData);
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          return setError({ message: error.message, status: null });
        }
      }
      setFormStageState(true);
    }
    if (text === "Back") {
      setFormStageState(false);
    }
  };

  const avatarInputHandler = (path: string) => {
    setFormData({ ...formData, avatar: path });
  };

  const imputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setError(errorInitalState);
    switch (e.target.name) {
      case "name":
        setFormData({ ...formData, name: e.target.value });
        break;
      case "birthDate":
        setFormData({ ...formData, birthDate: e.target.value });
        break;
      case "breed":
        setFormData({ ...formData, breed: e.target.value });
        break;
      case "comments":
        setFormData({ ...formData, comments: e.target.value });
        break;
      default:
        break;
    }
  };

  const onSubmitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addPetSecondSchema.validate(formData);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return setError({ message: error.message, status: null });
      }
    }

    const normalBirthday = birthDayNormalizer(formData.birthDate);
    try {
      const response = await addPets({
        ...formData,
        birthDate: normalBirthday,
      });

      handleData(response.data.pet);
      succesToastEmitter("pet added");
    } catch (error) {
      
      if (axios.isAxiosError(error)) {
        setError(error);
        errorToastEmitter(error.response?.data.message);
      }
      return null;
    }
    setFormData(initialState);
    setFormStageState(false);
    toggleModal();
  };

  const cancelationHandler = () => {
    toggleModal();
    setFormData(initialState);
  };

  return (
    <PetModalContainer>
      <AddPetHeading>Add pet</AddPetHeading>
      <AddPetContainer onSubmit={onSubmitHandle}>
        {!formStageState ? (
          <>
            <AddPetList>
              <FormListItem>
                <AddPetLabel htmlFor="name">Name pet</AddPetLabel>
                <InputContainer>
                  <AddPetInput
                    type="text"
                    name="name"
                    placeholder="Type pet name"
                    onChange={imputChangeHandler}
                    value={formData.name}
                  />
                  {error.message.length >= 1 &&
                    error.message.includes("name") && (
                      <FormMark message={error.message}></FormMark>
                    )}
                </InputContainer>
              </FormListItem>
              <FormListItem>
                <AddPetLabel htmlFor="birthDate">Date of birth</AddPetLabel>
                <InputContainer>
                  <AddPetInput
                    type="date"
                    name="birthDate"
                    min="1950-01-01"
                    onChange={imputChangeHandler}
                    value={formData.birthDate}
                  ></AddPetInput>
                  {error.message.length >= 1 &&
                    error.message.includes("birth") && (
                      <SpecialFieldError>
                        birthday field is empty
                      </SpecialFieldError>
                    )}
                </InputContainer>
              </FormListItem>
              <FormListItem>
                <AddPetLabel htmlFor="breed"> Breed</AddPetLabel>
                <InputContainer>
                  <AddPetInput
                    type="text"
                    name="breed"
                    placeholder="type pet breed"
                    onChange={imputChangeHandler}
                    value={formData.breed}
                  ></AddPetInput>
                  {error.message.length >= 1 &&
                    error.message.includes("breed") && (
                      <FormMark message={error.message}></FormMark>
                    )}
                </InputContainer>
              </FormListItem>
            </AddPetList>
            <AddPetButtonList>
              <AddPetNextButton type="button" onClick={formStageHandler}>
                Next
              </AddPetNextButton>
              <SecondaryButton type="button" onClick={cancelationHandler}>
                Cancel
              </SecondaryButton>
            </AddPetButtonList>
          </>
        ) : (
          <>
            <AddPetList>
              <FormListItem>
                <PetAvatarContainer>
                  <PetAvatarLabel>Add pet photo</PetAvatarLabel>
                  <DropZone avatarInputHandler={avatarInputHandler}></DropZone>
                  {error.message === "set pet`s avatar" && (
                    <SpecialFieldError>{error.message}</SpecialFieldError>
                  )}
                </PetAvatarContainer>
              </FormListItem>
              <FormListItem>
                <AddPetLabel htmlFor="comments">Comments</AddPetLabel>
                <InputContainer>
                  <AddPetTextArea
                    name="comments"
                    placeholder="Type comments"
                    onChange={imputChangeHandler}
                    value={formData.comments}
                  ></AddPetTextArea>
                  {error.message === "comments is too long(max 140)" && (
                    <SpecialFieldError>{error.message}</SpecialFieldError>
                  )}
                </InputContainer>
              </FormListItem>
            </AddPetList>
            <AddPetButtonList>
              <MainButton type="submit">Done</MainButton>
              <SecondaryButton type="button" onClick={formStageHandler}>
                Back
              </SecondaryButton>
            </AddPetButtonList>
          </>
        )}
      </AddPetContainer>
    </PetModalContainer>
  );
};

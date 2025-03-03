import { useState } from "react";
import { MainButton, SecondaryButton } from "../Button/button.styled";
import { CategoryRadio } from "./categoryRadio";
import * as yup from "yup";
import {
  AddNoticeButtonList,
  AddNoticeComments,
  AddNoticeContainer,
  AddNoticeHeading,
  AddNoticeInput,
  AddNoticeLabel,
  AddNoticeList,
  AddNoticeModalContainer,
  AddNoticeMotivation,
  NextButton,
  PriceDirection,
} from "./addNoticeForm.styled";
import { DropZone } from "../Dropzone/dropzone";
import { SexRadioButton } from "./sexRadioButton";
import { addNotices } from "../../api/noticesAPI";
import {
  InputContainer,
  SpecialFieldError,
} from "../FormElements/FormElements.styled";
import { FormMark } from "../FornMarks/formMarks";
import birthDayNormalizer from "../../Helpers/birthdayNormalizer";
import {
  addNoticeFirstSchema,
  addNoticeSecondSchema,
} from "../../validationSchemas/addNoticeSchema";
import { IUser } from "../../interfaces/authInterface";
import { ICreatedNotice, INotice } from "../../interfaces/noticeIntefaces";
import { IError } from "../../interfaces/errorInterface";
import axios, { AxiosError } from "axios";
import { errorToastEmitter, succesToastEmitter } from "../Toaster/toaste";

interface IAddNoticeProps {
  user: IUser | null;
  toggleModal: () => void;
  handleNotice: (newNotice: INotice) => void;
}

export const AddNoticeForm = ({
  user,
  toggleModal,
  handleNotice,
}: IAddNoticeProps) => {
  if (user === null) {
    throw new Error("unauthorised");
  }

  const initialState = {
    category: "sell",
    title: "",
    name: "",
    birthDate: "",
    breed: "",
    sex: "",

    location: "",
    comments: "",
    price: "",
    avatar: "",
    owner: user._id,
    email: user.email,
    phoneNumber: user.phoneNumber,
  };

  const errorInitalState = {
    message: "",
    status: null,
  };

  const [firstFormStage, setFirstFormStage] = useState<boolean>(true);
  const [formData, setFormData] = useState<ICreatedNotice>(initialState);
  const [error, setError] = useState<IError | AxiosError>(errorInitalState);

  const nextFormStage = async () => {
    try {
      await addNoticeFirstSchema.validate(formData);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return setError({ message: error.message, status: null });
      }
    }
    setFirstFormStage(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addNoticeSecondSchema.validate(formData);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return setError({ message: error.message, status: null });
      }
    }

    const normalBirthday = birthDayNormalizer(formData.birthDate);
    try {
      const response = await addNotices({
        ...formData,
        birthDate: normalBirthday,
      });

      handleNotice(response.data.newNotice);

      succesToastEmitter("notice created");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error);
        errorToastEmitter(error.response?.data.message)
      }
      return null;
    }
    setFirstFormStage(true)
    setFormData(initialState);
    toggleModal();
  };

  const avatarInputHandler = (path: string) => {
    setFormData({ ...formData, avatar: path });
  };

  return (
    <AddNoticeModalContainer>
      <AddNoticeHeading>Add pet</AddNoticeHeading>
      <AddNoticeContainer onSubmit={handleSubmit}>
        {firstFormStage ? (
          <>
            <AddNoticeMotivation>
              Don't wait any longer, give your furry friend the care and love
              they deserve by adding them to our family today!
            </AddNoticeMotivation>
            <AddNoticeList>
              <li>
                <CategoryRadio
                  formData={formData}
                  setFormData={setFormData}
                ></CategoryRadio>
              </li>
              <li>
                <InputContainer>
                  <AddNoticeLabel htmlFor="title">Tittle of ad:</AddNoticeLabel>
                  <AddNoticeInput
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={(e) => {
                      setFormData({ ...formData, title: e.target.value });
                    }}
                    placeholder="Type title of ad"
                  />
                  {error.message.length >= 1 &&
                    error.message.includes("title") && (
                      <FormMark message={error.message}></FormMark>
                    )}
                </InputContainer>
              </li>
              <li>
                <InputContainer>
                  <AddNoticeLabel htmlFor="name">Name pet:</AddNoticeLabel>
                  <AddNoticeInput
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                    }}
                    placeholder="Type pet`s name "
                  />
                  {error.message.length >= 1 &&
                    error.message.includes("name") && (
                      <FormMark message={error.message}></FormMark>
                    )}
                </InputContainer>
              </li>
              <li>
                <InputContainer>
                  <AddNoticeLabel htmlFor="birthDate">
                    Date of birth:
                  </AddNoticeLabel>
                  <AddNoticeInput
                    type="date"
                    name="birthDate"
                    min="1950-01-01"
                    value={formData.birthDate}
                    onChange={(e) => {
                      setFormData({ ...formData, birthDate: e.target.value });
                    }}
                  />
                </InputContainer>
                {error.message === "set pet`s birth date" && (
                  <SpecialFieldError>birthday field is empty</SpecialFieldError>
                )}
              </li>
              <li>
                <InputContainer>
                  <AddNoticeLabel htmlFor="breed">Breed</AddNoticeLabel>
                  <AddNoticeInput
                    type="text"
                    name="breed"
                    value={formData.breed}
                    onChange={(e) => {
                      setFormData({ ...formData, breed: e.target.value });
                    }}
                    placeholder="Type pet`s breed"
                  />
                  {error.message.length >= 1 &&
                    error.message.includes("breed") && (
                      <FormMark message={error.message}></FormMark>
                    )}
                </InputContainer>
              </li>
            </AddNoticeList>
            <AddNoticeButtonList>
              <NextButton type="button" onClick={nextFormStage}>
                Next
              </NextButton>
              <SecondaryButton type="button" onClick={() => toggleModal()}>
                Cancel
              </SecondaryButton>
            </AddNoticeButtonList>
          </>
        ) : (
          <>
            <AddNoticeList>
              <li>
                <AddNoticeLabel> Choose pet sex:</AddNoticeLabel>
                <SexRadioButton
                  formData={formData}
                  setFormData={setFormData}
                ></SexRadioButton>
                {error.message === "set pet`s sex" && (
                  <SpecialFieldError>{error.message}</SpecialFieldError>
                )}
              </li>
              <li>
                <InputContainer>
                  <AddNoticeLabel htmlFor="location">Location:</AddNoticeLabel>
                  <AddNoticeInput
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={(e) => {
                      setFormData({ ...formData, location: e.target.value });
                    }}
                    placeholder="Type location of pet"
                  />
                  {error.message.length >= 1 &&
                    error.message.includes("location") && (
                      <FormMark message={error.message}></FormMark>
                    )}
                </InputContainer>
              </li>
              <li>
                {formData.category === "sell" && (
                  <PriceDirection>
                    <AddNoticeLabel htmlFor="price">Price:</AddNoticeLabel>
                    <AddNoticeInput
                      type="text"
                      name="price"
                      value={formData.price}
                      onChange={(e) => {
                        setFormData({ ...formData, price: e.target.value });
                      }}
                      placeholder="Type pet`s price"
                    />
                    {error.message === "price is too long" && (
                      <FormMark message={error.message}></FormMark>
                    )}
                  </PriceDirection>
                )}
              </li>
              <li>
                <AddNoticeLabel>Load the pet’s image:</AddNoticeLabel>
                <DropZone avatarInputHandler={avatarInputHandler}></DropZone>
                {error.message === "set pet`s avatar" && (
                  <SpecialFieldError>{error.message}</SpecialFieldError>
                )}
              </li>
              <li>
                <AddNoticeLabel htmlFor="comments">Comments:</AddNoticeLabel>
                <AddNoticeComments
                  name="comments"
                  value={formData.comments}
                  onChange={(e) => {
                    setFormData({ ...formData, comments: e.target.value });
                  }}
                  placeholder="Type something about pet"
                />
                {error.message === "coments is too long(max 64)" && (
                  <SpecialFieldError>{error.message}</SpecialFieldError>
                )}
              </li>
            </AddNoticeList>
            <AddNoticeButtonList>
              <MainButton type="submit">Done</MainButton>
              <SecondaryButton
                type="button"
                onClick={() => setFirstFormStage(true)}
              >
                Back
              </SecondaryButton>
            </AddNoticeButtonList>
          </>
        )}
      </AddNoticeContainer>
    </AddNoticeModalContainer>
  );
};

import React, { useEffect, useState } from "react";
import * as yup from "yup";
import {
  RegForm,
  RegFormButtonList,
  RegFormList,
} from "./registrationForm.styled";
import { AuthMainButton, AuthSecondaryButton } from "../Button/button.styled";
import {
  FormButtonContainer,
  FormInput,
  FormLabel,
  FormListItem,
} from "../FormElements/FormElements.styled";
import { FormMark } from "../FornMarks/formMarks";
import { regUser } from "../../Redux/operations";
import { useNavigate } from "react-router-dom";
import { getError } from "../../Redux/selectors";
import {
  registerUserFirstSchema,
  registerUserSecondSchema,
} from "../../validationSchemas/registerUserSchema";
import { useAppDispatch, useAppSelector } from "../../customHooks/customHooks";
import { IError } from "../../interfaces/errorInterface";

interface IFormData {
  email: string;
  password: string;
  passwordConfirmation: string;
  name: string;
  city: string;
  phoneNumber: string;
}



export const RegistationForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const error = useAppSelector(getError);

  const initialState = {
    email: "",
    password: "",
    passwordConfirmation: "",
    name: "",
    city: "",
    phoneNumber: "",
  };

  const errorInitalState = {
    message: "",
    status: null,
  };
  
  const [nextFormPage, setFormPageState] = useState<boolean>(false);
  const [formData, setFormData] = useState<IFormData>(initialState);
  const [errorMessage, setErrorMessage] = useState<IError>(errorInitalState);

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);

  const firstPageValidation = async () => {
    if (formData.password !== formData.passwordConfirmation) {
      throw new Error("password fields do not match");
    }
    try {
      await registerUserFirstSchema.validate(formData, { abortEarly: false });
    } catch (error: unknown) {
      if (error instanceof yup.ValidationError) {
        throw new Error(error.errors[0]);
      }
    }
  };

  const formStageHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const text = (e.target as HTMLButtonElement).textContent;

    if (text === "Next") {
      try {
        await firstPageValidation();
        setFormPageState(true);
      } catch (error) { 
        const errorMessage =
          error instanceof Error ? error.message : "unknown error";
        return setErrorMessage({ message: errorMessage, status: null });
      }
    }

    if (text === "Back") {
      setFormPageState(false);
    }
  };

  const registerHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await registerUserSecondSchema.validate(formData);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return setErrorMessage({ message: error.message, status: null });
      }
    }

    try {
      await dispatch(regUser(formData)).unwrap();
      setFormData(initialState);
      navigate("/login");
    } catch (err) {
      const errorMessage =
        error instanceof Error ? error.message : "unknown error";
      setErrorMessage({ message: errorMessage, status: null });
    }
    setFormPageState(false);
  };

  const imputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(errorInitalState);
    switch (e.target.name) {
      case "email":
        setFormData({ ...formData, email: e.target.value });
        break;
      case "password":
        setFormData({ ...formData, password: e.target.value });
        break;
      case "passwordConfirmation":
        setFormData({ ...formData, passwordConfirmation: e.target.value });
        break;
      case "name":
        setFormData({ ...formData, name: e.target.value });
        break;
      case "city":
        setFormData({ ...formData, city: e.target.value });
        break;
      case "phoneNumber":
        setFormData({ ...formData, phoneNumber: e.target.value });
        break;
      default:
        break;
    }
  };

  return (
    <RegForm onSubmit={registerHandler}>
      {nextFormPage === false && (
        <>
          <RegFormList>
            <FormListItem>
              <FormLabel htmlFor="email">
                <FormInput
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={imputChangeHandler}
                  value={formData.email}
                />
                {((errorMessage.message.length >= 1 &&
                  errorMessage.message.includes("email")) ||
                  errorMessage.status === 409) && (
                  <FormMark message={errorMessage.message}></FormMark>
                )}
              </FormLabel>
            </FormListItem>
            <FormListItem>
              <FormLabel htmlFor="password">
                <FormInput
                  type="text"
                  name="password"
                  placeholder="Password"
                  onChange={imputChangeHandler}
                  value={formData.password}
                />
                {errorMessage.message.length >= 1 &&
                  errorMessage.message.includes("password") && (
                    <FormMark message={errorMessage.message}></FormMark>
                  )}
              </FormLabel>
            </FormListItem>
            <FormListItem>
              <FormLabel htmlFor="passwordConfirmation">
                <FormInput
                  type="text"
                  name="passwordConfirmation"
                  placeholder="Confirm Password"
                  onChange={imputChangeHandler}
                  value={formData.passwordConfirmation}
                />
                {errorMessage.message === "password fields do not match" && (
                  <FormMark message={errorMessage.message}></FormMark>
                )}
              </FormLabel>
            </FormListItem>
          </RegFormList>
          <FormButtonContainer>
            <AuthMainButton type="button" onClick={formStageHandler}>
              Next
            </AuthMainButton>
          </FormButtonContainer>
        </>
      )}
      {nextFormPage === true && (
        <>
          <RegFormList>
            <FormListItem>
              <FormLabel htmlFor="name">
                <FormInput
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={imputChangeHandler}
                  value={formData.name}
                />
                {errorMessage.message.length >= 1 &&
                  errorMessage.message.includes("name") && (
                    <FormMark message={errorMessage.message}></FormMark>
                  )}
              </FormLabel>
            </FormListItem>
            <FormListItem>
              <FormLabel htmlFor="city">
                <FormInput
                  type="text"
                  name="city"
                  placeholder="City,region"
                  onChange={imputChangeHandler}
                  value={formData.city}
                />
                {errorMessage.message.length >= 1 &&
                  errorMessage.message.includes("city") && (
                    <FormMark message={errorMessage.message}></FormMark>
                  )}
              </FormLabel>
            </FormListItem>
            <FormListItem>
              <FormLabel htmlFor="phoneNumber">
                <FormInput
                  type="text"
                  name="phoneNumber"
                  placeholder="Mobile phone"
                  onChange={imputChangeHandler}
                  value={formData.phoneNumber}
                />
                {errorMessage.message.length >= 1 &&
                  errorMessage.message.includes("phone number") && (
                    <FormMark message={errorMessage.message}></FormMark>
                  )}
              </FormLabel>
            </FormListItem>
          </RegFormList>
          <RegFormButtonList>
            <AuthMainButton type="submit">Register</AuthMainButton>
            <AuthSecondaryButton type="button" onClick={formStageHandler}>
              Back
            </AuthSecondaryButton>
          </RegFormButtonList>
        </>
      )}
    </RegForm>
  );
};

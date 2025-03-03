import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  FormButtonContainer,
  FormInput,
  FormLabel,
  FormListItem,
} from "../FormElements/FormElements.styled";
import { AuthMainButton } from "../Button/button.styled";
import { LoginFormContainer, LoginFormList } from "./LoginForm.styled";

import { loginUser } from "../../Redux/operations";
import { getError } from "../../Redux/selectors";
import { FormMark } from "../FornMarks/formMarks";
import { useAppDispatch, useAppSelector } from "../../customHooks/customHooks";

export const LoginForm = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const errorInitalState = {
    message: "",
    status: null,
  };

  interface IFormData{
    email: string;
    password: string;
  }

  interface IError{
    message: string;
    status: number | null;
  }


  const [formData, setFormData] = useState<IFormData>(initialState);
  const [error, setErrorMessage] = useState<IError>(errorInitalState);
  const dispatch = useAppDispatch()
  const errorMessage = useAppSelector(getError);

  useEffect(() => {
    setErrorMessage(errorMessage);
  }, [errorMessage]);

  const loginHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.email === "") {
      return setErrorMessage({ message: "Email field is empty", status: null });
    }
    if (formData.password === "") {
      return setErrorMessage({ message: "Password field is empty", status: null });
    }

    dispatch(loginUser({ email: formData.email, password: formData.password }));
    setFormData(initialState);
  };

  const imputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(errorInitalState);
    switch (e.target.name) {
      case "email":
        setFormData({ ...formData, email: e.target.value });
        
        break;
      case "password":
        setFormData({ ...formData, password: e.target.value });
        break;
      default:
        break;
    }
  };
  return (
    <LoginFormContainer onSubmit={loginHandler}>
      <LoginFormList>
        <FormListItem>
          <FormLabel>
            <FormInput
              type="text"
              name="email"
              placeholder="Email"
              onChange={imputChangeHandler}
              value={formData.email}
            />
            {(error.message === "Email field is empty" ||
              error.status === 404) && (
              <FormMark message={error.message}></FormMark>
            )}
          </FormLabel>
        </FormListItem>
        <FormListItem>
          <FormLabel>
            <FormInput
              type="text"
              name="password"
              placeholder="Password"
              onChange={imputChangeHandler}
              value={formData.password}
            />
            {(error.message === "Password field is empty" ||
              error.status === 401) && (
              <FormMark message={error.message}></FormMark>
            )}
          </FormLabel>
        </FormListItem>
      </LoginFormList>
      <FormButtonContainer>
        <AuthMainButton type="submit">Login</AuthMainButton>
      </FormButtonContainer>
    </LoginFormContainer>
  );
};

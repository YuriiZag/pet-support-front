import { RegistationForm } from "../../Components/RegistrationForm/registrationForm";
import { RegisterContainer, RegisterHeading, RegStyledContainer } from "./registerPage.styled";
import { PageHint } from "../../Components/PageHint/pageHint";
const RegisterPage = () => {
  return (
    <RegisterContainer>
      <RegStyledContainer>
        <RegisterHeading>Registration</RegisterHeading>
        <RegistationForm></RegistationForm>
        <PageHint
          hintMessage="Already have an account?"
          linkMessage="Login"
          linkPath="/login"
        ></PageHint>
      </RegStyledContainer>
    </RegisterContainer>
  );
};

export default RegisterPage;

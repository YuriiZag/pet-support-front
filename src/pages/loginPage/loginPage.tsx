import { LoginForm } from "../../Components/LoginForm/LoginForm";
import { PageHint } from "../../Components/PageHint/pageHint";
import { LoginPageContainer, LoginPageHeading, LogStyledContainer } from "./loginPage.styled";

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LogStyledContainer>
        <LoginPageHeading>Login</LoginPageHeading>
        <LoginForm></LoginForm>
        <PageHint
          hintMessage="Don`t have account?"
          linkMessage="Register"
          linkPath="/register"
        ></PageHint>
      </LogStyledContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;

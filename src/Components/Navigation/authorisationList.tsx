import { getIsLoggedIn, getUserName } from "../../Redux/selectors";
import { FaUserCircle } from "react-icons/fa";
import {
  AuthorizationList,
  LoginLink,
  RegisterLink,
  UserNameLink,
  UserNameWrapper,
} from "./authorisationList.styled";
import { useAppSelector } from "../../customHooks/customHooks";

export const Authorisation = () => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const userName = useAppSelector(getUserName);
  
  return (
    <AuthorizationList>
      {isLoggedIn ? (
        <li>
          <UserNameLink to={"/user"}>
            <FaUserCircle style={{ width: "17px", height: "17px" }} />
            <UserNameWrapper>{userName}</UserNameWrapper>
          </UserNameLink>
        </li>
      ) : (
        <>
          <li>
            <LoginLink to="/login">Login</LoginLink>
          </li>
          <li>
            <RegisterLink to="/register">Register</RegisterLink>
          </li>
        </>
      )}
    </AuthorizationList>
  );
};

import { Link } from "react-router-dom";
import styled from "styled-components";

export const AuthorizationList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 46px;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const LoginLink = styled(Link)`
  border: 2px solid #f59256;
  background-color: #f59256;
  border-radius: 40px;

  padding: 8px 28px;
  text-align: center;

  width: 100%;
  color: white;
  font-size: 14px;
`;

export const RegisterLink = styled(Link)`
  border: 2px solid #f59256;
  background-color: transparent;
  border-radius: 40px;

  padding: 8px 28px;
  text-align: center;

  width: 100%;
  color: black;
  font-size: 14px;
`;
export const UserNameLink = styled(Link)`
  border: 2px solid #f59256;
  background-color: #f59256;
  border-radius: 40px;
  margin: 0 auto;


  padding: 8px 28px;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 164px;
  color: white;
  font-size: 14px;
`;
export const UserNameWrapper = styled.span`
  margin-left: 12px;
`;

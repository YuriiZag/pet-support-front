import { Link } from "react-router-dom";
import styled from "styled-components";


export const PageList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 40px;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 80px;
    margin-left: 80px;
  }
`;

export const PageLink = styled(Link)`
  font-size: 32px;
  font-weight: 500;
  color: black;
  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const ActiveLink = styled(Link)`
  font-size: 32px;
  font-weight: 500;
  color: #f59256;
  text-decoration: underline 1px #f59256;
  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

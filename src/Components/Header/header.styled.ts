import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  padding: 16px 20px;
  
  justify-content: space-between;
  align-items: center;
  background-color: #FDF7F2;
`;

export const Logo = styled(Link)`
  text-align: center;
  margin: 0;
  font-size: 28px;
  line-height: 48px;
  font-weight: 700;
  color: black;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const StyleContainer = styled.div`
  display: flex;
  align-items: center;
`


export const BurgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  padding: 0;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }

  @media screen and (min-width: 1024px) {
    position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
  }
`;

export const DropDown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #FDF7F2;
  z-index: 1200;

  width: 100%;
  height: 100vh;
`;

export const NavContainer = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;


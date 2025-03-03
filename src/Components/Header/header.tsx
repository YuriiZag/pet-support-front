import { useEffect, useState } from "react";
import {
  BurgerButton,
  HeaderContainer,
  Logo,
  DropDown,
  NavContainer,
  StyleContainer,
} from "./header.styled";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Navigation } from "../Navigation/navigation";
import { useLocation } from "react-router-dom";
import { Authorisation } from "../Navigation/authorisationList";

export const Header = () => {
  const [dropDownState, setDropDownState] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    dropDownCloser();
  }, [pathname]);

  const dropDownTogler = (): void => {
    setDropDownState(!dropDownState);
  };

  const dropDownCloser = (): void => {
    setDropDownState(false);
  };

  return (
    <HeaderContainer>
      <Logo to={"/"}>
        pe<span style={{ color: "#F59256" }}>t</span>ly
      </Logo>
      <StyleContainer>
        {!dropDownState &&
          window.innerWidth >= 768 &&
          window.innerWidth < 1024 && <Authorisation></Authorisation>}
        <BurgerButton type="button" onClick={dropDownTogler}>
          {dropDownState ? (
            <RxCross2 style={{ width: "40px", height: "40px" }} />
          ) : (
            <RxHamburgerMenu style={{ width: "40px", height: "40px" }} />
          )}
        </BurgerButton>
      </StyleContainer>
      {window.innerWidth < 768 && dropDownState && (
        <DropDown>
          <NavContainer>
            <Authorisation></Authorisation>
            <Navigation pathname={pathname}></Navigation>
          </NavContainer>
        </DropDown>
      )}
      {window.innerWidth >= 768 && dropDownState && (
        <DropDown>
          <NavContainer>
            <Navigation pathname={pathname}></Navigation>
          </NavContainer>
        </DropDown>
      )}
      {window.innerWidth >= 1024 && (
        <NavContainer>
          <Navigation pathname={pathname}></Navigation>
          <Authorisation></Authorisation>
        </NavContainer>
      )}
    </HeaderContainer>
  );
};

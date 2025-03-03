import styled from "styled-components";
import { MainButton, SecondaryButton } from "../Button/button.styled";

export const PetCategoryList = styled.ul`
  display: flex;
  gap: 12px;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;

  margin-top: 28px;
  padding: 0 20px;
`;

export const ActiveCategory = styled(MainButton)`
  width: 100%;
  padding: 9px 28px;
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768) {
    width: 100%;
  }
`;

export const InActiveCategory = styled(SecondaryButton)`
  width: 100%;
  padding: 9px 28px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 0;
  @media screen and (min-width: 768) {
    width: 100%;
  }
`;

import styled from "styled-components";

export const PetsList = styled.ul`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 24px;
    width: 100%;
  }
`;

export const PetsListItem = styled.li`
  position: relative;

  background-color: white;
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  padding: 20px 20px 40px 20px;

  @media screen and (min-width: 768px) {
    width: calc(100% - 64px);
    display: flex;
    gap: 32px;
  }
`;

export const PetsListAvatar = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    height: 161px;
    width: 161px;
  }
`;

export const PetDataInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-top: 20px;
`;

export const PetDataItem = styled.li`
  font-size: 14px;
  font-weight: 400;
`;
export const PetDataLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const PetDeleteButton = styled.button`
  position: absolute;
  right: 20px;
  top: 272px;
  width: 20px;
  height: 20px;


  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;

  color: rgba(17, 17, 17, 0.6);
  @media screen and (min-width: 768px) {
    top: 20px;
    right: 20px;
    
    width: 44px;
    height: 44px;
    background-color: rgba(253, 247, 242, 1);
    border-radius: 50%;
    padding: 10px;
  }
`;

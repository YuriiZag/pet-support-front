import styled from "styled-components";

export const UserCardContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: white;
  border-radius: 20px;
  box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.11);
  padding: 20px 16px;
  margin-bottom: 47px;
  margin-top: 18px;
  

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row-reverse;

    margin-left: -32px;
    border-radius: 0 20px 20px 0;
    padding: 24px 32px;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: column;
    margin-top: 24px;
  }
`;


export const UserInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-top: 32px;
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
  }
`;
export const UserInfoListItem = styled.ul`
  display: flex;
`;


export const LogOutButton = styled.button`
  display: flex;
  align-self: flex-end;

  color: rgba(17, 17, 17, 0.6);
  font-size: 16px;
  font-weight: 500;

  background-color: transparent;
  border: none;
`;

export const InfoStyledContainer = styled.div`


`
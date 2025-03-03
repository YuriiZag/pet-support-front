import styled from "styled-components";

export const InfoFieldContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfoLabel = styled.span`
  display: block;
  width: 56px;
  font-size: 12px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 83px;
  }
`;

export const UserInfoWrapper = styled.span`
  display: block;
  width: 117px;
  font-size: 12px;
  font-weight: 500;

  margin-right: 33px;
  margin-left: 26px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 175px;

    margin-right: 53px;
    margin-left: 36px;
  }
`;
export const UserInfoEdit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;
  padding: 4px;

  background-color: rgba(253, 247, 242, 1);
  border: none;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    height: 32px;
    width: 32px;
    padding: 6px;
  }
`;

export const UserEditForm = styled.form`
  display: flex;
  justify-content: center;
  margin-left: 8px;
  justify-self: center;

  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }
`;

export const UserEditInput = styled.input`
  padding: 4px 18px;
  box-sizing: border-box;
  margin-right: 9px;

  font-size: 12px;
  font-weight: 400;
  width: 159px;

  border-radius: 40px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  background-color: rgba(253, 247, 242, 1);

  @media screen and (min-width: 768px) {
    width: 216px;
    padding: 4px 12px;
    font-size: 18px;

    margin-right: 24px;
  }
`;

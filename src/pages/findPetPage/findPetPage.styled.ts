import styled from "styled-components";

export const FindPetContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
  height: 100vh;
`;

export const FindPetHero = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-top: 42px;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    margin-bottom: 40px;
  }
`;
export const FindPetStyledContainer = styled.div`
  position: relative;
  width: 100%;
`;
export const AddNoticeButton = styled.button`
  position: fixed;
  top: 450px;
  right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;

  width: 80px;
  height: 80px;

  background-color: rgba(245, 146, 86, 1);
  border: none;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row-reverse;

    position: absolute;
    right: 30px;
    top: 5px;

    color: #000;
    background-color: transparent;
    box-shadow: none;
    width: 130px;
  }
`;

export const AddNoticeWrapper = styled.span`
  font-weight: 500;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 500;
  }
`;

export const ButtonAddContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 44px;
    height: 44px;
    color: white;

    background-color: rgba(245, 146, 86, 1);
    border: none;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border-radius: 50%;
  }
`;

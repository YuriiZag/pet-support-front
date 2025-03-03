import styled from "styled-components";
import { FormInput } from "../FormElements/FormElements.styled";

export const AddNoticeModalContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 608px;
  }
`;

export const AddNoticeContainer = styled.form`
  padding: 0  20px 20px 20px;
  @media screen and (min-width: 768px) {
    padding: 0 80px 20px 80px;
  }
`;

export const AddNoticeHeading = styled.h1`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    font-weight: 600;
  }
`;
export const AddNoticeMotivation = styled.p`
  padding: 20px 0px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding-bottom: 28px 0px;
  }
`;

export const AddNoticeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 28px;
  }
`;

export const AddNoticeLabel = styled.label`
  font-weight: 500;
  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const PriceDirection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddNoticeInput = styled(FormInput)`
  margin-top: 8px;
  background-color: rgba(253, 247, 242, 1);
  border: 1px solid rgba(245, 146, 86, 0.5);
  @media screen and (min-width: 768px) {
    margin-top: 12px;
    max-width: 448px;
  }
`;
export const AddNoticeComments = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  max-width: 280px;
  min-height: 40px;

  margin-top: 8px;
  padding: 12px 14px;

  border-radius: 40px;
  resize: none;

  background-color: rgba(253, 247, 242, 1);
  border: 1px solid rgba(245, 146, 86, 0.5);

  overflow: hidden;
  @media screen and (min-width: 768px) {
    margin-top: 12px;
    max-width: 448px;
    min-height: 113px;
    border-radius: 20px;
  }
`;

export const NextButton = styled.button`
  border: 2px solid #f59256;
  background-color: #f59256;
  border-radius: 40px;
  width: 280px;

  padding: 8px 28px;
  text-align: center;

  color: white;

  font-size: 20px;
  font-weight: 500;
`;

export const AddNoticeButtonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

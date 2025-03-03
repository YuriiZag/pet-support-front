import styled from "styled-components";
import { SecondaryButton } from "../Button/button.styled";

interface IProps {
  singleNotice: boolean;
}

export const SingleNoticeContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "singleNotice",
})<IProps>`
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.singleNotice ? "60px 20px 40px 20px" : "0")};

  @media screen and (min-width: 768px) {
    width: ${(props) => (props.singleNotice ? "704px" : "280px")};
    padding: ${(props) => (props.singleNotice ? "32px 20px" : "0")};
  }
`;

export const SingleStyleContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "singleNotice",
})<IProps>`
  @media screen and (min-width: 768px) {
    display: ${(props) => (props.singleNotice ? "flex" : "block")};
  }
`;

export const FavouriteNoticeButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  color: rgba(245, 146, 86, 1);

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border: none;

  background-color: rgba(255, 255, 255, 0.6);

  width: 44px;
  height: 44px;
`;
export const NoticeCategory = styled.p`
  position: absolute;
  top: 20px;

  width: 140px;

  border-radius: 0 20px 20px 0;

  color: rgba(17, 17, 17, 1);
  background-color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  font-weight: 600;
  padding: 6px 20px;
`;

export const NoticeTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  text-align: center;

  margin-top: 20px;
  padding: 0 20px;

  color: rgba(17, 17, 17, 1);
`;

export const NoticeInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 20px;
  padding: 0 20px;
`;

export const NoticeInfo = styled.span`
  display: flex;
  font-size: 16px;
  font-weight: 500;
`;

export const NoticeInfoWrapper = styled.span`
  display: block;
  width: 90px;
  font-size: 16px;
  font-weight: 600;
`;
export const NoticeAwatarWraper = styled.div`
  position: relative;
`;

export const NoticeAvatar = styled.img`
  max-width: 240px;
  height: 240px;
  border-radius: 0 0 20px 20px;
  @media screen and (min-width: 768px) {
    max-width: 288px;
    height: 328px;
  }
`;
export const ContactList = styled.ul`
  margin-top: 40px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 332px;
    align-self: flex-end;
  }
`;

export const ComentsWraper = styled.p`
  margin-top: 28px;
  padding: 0 20px;
`;

export const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ContactButton = styled.a`
  box-sizing: border-box;
  border: 2px solid #f59256;
  background-color: #f59256;
  border-radius: 40px;

  padding: 9px;
  text-align: center;

  width: 240px;
  color: white;

  font-size: 20px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    max-width: 160px;
  }
`;

export const FavouriteButton = styled(SecondaryButton)`
  display: flex;
  justify-content: center;
  margin-bottom: 0;
  max-width: 240px;
  @media screen and (min-width: 768px) {
    max-width: 160px;
  }
`;

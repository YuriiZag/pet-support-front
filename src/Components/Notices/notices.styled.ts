import styled from "styled-components";

export const NoticesList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-top: 30px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
      flex-wrap: wrap;
      flex-direction: row;
  }
`;

export const NoticeContainer = styled.li`
  height: 606px;
  width: 286px;
  background-color: white;
  border-radius: 0 0 20px 20px;
  box-shadow: rgba(49, 21, 4, 0.07);

`;

export const NoticeButtonList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  padding: 0 20px;

  margin-top: 20px;
`;

export const NoticeButtonListItem = styled.li`
  width: 100%;
`;

export const NoticeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid #f59256;
  border-radius: 40px;
  padding: 8px 0;
  width: 100%;
  background-color: transparent;

  color: #f59256;
  font-size: 16px;
  font-weight: 500;
`;


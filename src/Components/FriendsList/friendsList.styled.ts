import styled from "styled-components";

export const FriendsListContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const FriendsListItem = styled.li`
  width: 280px;
  padding: 12px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

  @media screen and (min-width: 768px) {
    width: 334px;
    padding: 16px 35px;
  }
`;

export const FriendName = styled.h2`
  margin-bottom: 12px;

  font-size: 12px;
  font-weight: 700;
  color: rgba(245, 146, 86, 1);
  text-align: center;

  text-decoration: underline 1px rgba(245, 146, 86, 1);
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const FriendAvatar = styled.img`
  width: 100px;
  height: 80px;
`;

export const ServiceInfoContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const ServiceInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const ServiceInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ServiceInfoLabel = styled.span`
  font-weight: 500;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
export const ServiceData = styled.span`
  font-weight: 500;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const ServiceLink = styled.a`
  font-weight: 500;
  font-size: 12px;
  text-decoration: none;
  color: black;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const ServiceDataButton = styled.button`
  text-align: start;
  border: none;
  background-color: transparent;
  font-weight: 500;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const WorkingHoursContainer = styled.div`
  position: absolute;
  top: 30px;

  display: flex;
  gap: 4px;

  padding: 12px;
  border: 1px solid rgba(245, 146, 86, 1);
  border-radius: 20px;

  background-color: white;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);

  z-index: 1000;
`;

export const WorkingHoursList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const WorkingHoursListItem = styled.li`
  display: flex;
`;

export const WorkingDayLable = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 500;
  width: 22px;
  margin-right: 10px;
`;
export const WorkingDayTime = styled.span`
  font-size: 12px;
  font-weight: 500;
`;

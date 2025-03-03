import { useState } from "react";
import {
  FriendAvatar,
  FriendName,
  FriendsListContainer,
  FriendsListItem,
  ServiceData,
  ServiceDataButton,
  ServiceInfo,
  ServiceInfoContainer,
  ServiceInfoLabel,
  ServiceInfoList,
  ServiceLink,
  WorkingDayLable,
  WorkingDayTime,
  WorkingHoursContainer,
  WorkingHoursList,
  WorkingHoursListItem,
} from "./friendsList.styled";
import { IService } from "../../interfaces/servicInterface";

export const FriendsList = ({ serviceList }: {serviceList: IService[]}) => {
  const [isWorkTimeVisible, setIsWorkTimeVisible] = useState<null | string>(null);

  const dateFilter = (workingTime: Record<string, string>) => {
    const today = new Date();
    const dayOfTheWeek = today.getDay();
    const week: string[] = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const todayWorkTime = Object.entries(workingTime).map((key, value) => {

      if (week[dayOfTheWeek].toLocaleLowerCase().includes(key[0])) {
        return `${key}`
      } else { return "24/7"}
    });
    return todayWorkTime[0];
  };
  const onClickHandler = (id: string) => {
    setIsWorkTimeVisible((prevState) => (prevState === id ? null : id));
  };

  return (
    <FriendsListContainer>
      {serviceList.map((service) => (
        <FriendsListItem key={service._id}>
          <FriendName>{service.serviceName}</FriendName>
          <ServiceInfoContainer>
            <FriendAvatar src={service.logo} alt="service logo"></FriendAvatar>
            <ServiceInfoList>
              <li>
                <ServiceInfo>
                  <ServiceInfoLabel>Time:</ServiceInfoLabel>
                  <ServiceDataButton
                    type="button"
                    onClick={() => onClickHandler(service._id)}
                  >
                    {dateFilter(service.workingTime)}
                  </ServiceDataButton>

                  {isWorkTimeVisible === service._id && (
                    <WorkingHoursContainer
                      onClick={() => onClickHandler(service._id)}
                    >
                      <WorkingHoursList>
                        {Object.entries(service.workingTime).map(
                          ([key, value]) => (
                            <WorkingHoursListItem key={key}>
                              <WorkingDayLable>{key}</WorkingDayLable>
                              <WorkingDayTime>{value}</WorkingDayTime>
                            </WorkingHoursListItem>
                          )
                        )}
                      </WorkingHoursList>
                    </WorkingHoursContainer>
                  )}
                </ServiceInfo>
              </li>
              <li>
                <ServiceInfo>
                  <ServiceInfoLabel>Address:</ServiceInfoLabel>
                  <ServiceData>{service.address}</ServiceData>
                </ServiceInfo>
              </li>
              <li>
                <ServiceInfo>
                  <ServiceInfoLabel>Email:</ServiceInfoLabel>
                  <ServiceLink href={`mailto:${service.email}`}>
                    {service.email}
                  </ServiceLink>
                </ServiceInfo>
              </li>
              <li>
                <ServiceInfo>
                  <ServiceInfoLabel>Phone:</ServiceInfoLabel>
                  <ServiceLink href={`tel:${service.phoneNumber}`}>
                    {service.phoneNumber}
                  </ServiceLink>
                </ServiceInfo>
              </li>
            </ServiceInfoList>
          </ServiceInfoContainer>
        </FriendsListItem>
      ))}
    </FriendsListContainer>
  );
};

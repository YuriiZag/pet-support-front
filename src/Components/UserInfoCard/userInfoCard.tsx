import React, { useEffect, useState } from "react";
import { getIsLoggedIn, getUser } from "../../Redux/selectors";
import { currentUser, logOut, updateUser } from "../../Redux/operations";
import {
  UserCardContainer,
  UserInfoList,
  UserInfoListItem,
  LogOutButton,

} from "./userInfoCard.styled";

import { TbLogout } from "react-icons/tb";
import { UserAvatar } from "./userAvatar";
import { UserInfoField } from "./userInfoField";
import { useAppDispatch, useAppSelector } from "../../customHooks/customHooks";
import { IUser } from "../../interfaces/authInterface";
import { ErrorFiller } from "../Error/error";

export interface IUpdateField {
  isUpdating: boolean;
  updateFieldName: string;
}

export const UserInfoCard = () => {
  const initialValue = { isUpdating: false, updateFieldName:  "" };
  const [updateField, setUpdateField] = useState<IUpdateField>(initialValue);
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(currentUser());
    }
  }, [dispatch, isLoggedIn]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    switch (e.currentTarget.id) {
      case "userNameUpdate":
        setUpdateField({ isUpdating: true, updateFieldName: "userNameUpdate" });
        break;
      case "userEmailUpdate":
        setUpdateField({
          isUpdating: true,
          updateFieldName: "userEmailUpdate",
        });
        break;
      case "userBirthdayUpdate":
        setUpdateField({
          isUpdating: true,
          updateFieldName: "userBirthdayUpdate",
        });
        break;
      case "userPhoneUpdate":
        setUpdateField({
          isUpdating: true,
          updateFieldName: "userPhoneUpdate",
        });
        break;
      case "userCityUpdate":
        setUpdateField({ isUpdating: true, updateFieldName: "userCityUpdate" });
        break;
      default:
        setUpdateField(initialValue);
        break;
    }
  };

  const handleLogout = () => {
    dispatch(logOut());
  };

  const handleUserUpdate = (data: Partial<IUser>) => {
    dispatch(updateUser(data));
    setUpdateField(initialValue);
  };
  const user = useAppSelector(getUser);
  if (!user) {
    return <ErrorFiller></ErrorFiller>;
  }

  
  return (
    <UserCardContainer>
      <UserAvatar avatar={user.avatar}></UserAvatar>
      <div>
        <UserInfoList>
          <UserInfoListItem>
            <UserInfoField
              fieldName="userNameUpdate"
              fieldLabel="Name:"
              fieldData={user.name}
              handleClick={handleClick}
              updateField={updateField || initialValue}
              handleUserUpdate={handleUserUpdate}
              objectKey="name"
            ></UserInfoField>
          </UserInfoListItem>
          <UserInfoListItem>
            <UserInfoField
              fieldName="userEmailUpdate"
              fieldLabel="Email:"
              fieldData={user.email}
              handleClick={handleClick}
              updateField={updateField}
              handleUserUpdate={handleUserUpdate}
              objectKey="email"
            ></UserInfoField>
          </UserInfoListItem>
          <UserInfoListItem>
            <UserInfoField
              fieldName="userBirthdayUpdate"
              fieldLabel="Birthday:"
              fieldData={user.birthday ? user.birthday : "set birthday"}
              handleClick={handleClick}
              updateField={updateField || initialValue}
              handleUserUpdate={handleUserUpdate}
              objectKey="birthday"
              type="date"
            ></UserInfoField>
          </UserInfoListItem>
          <UserInfoListItem>
            <UserInfoField
              fieldName="userPhoneUpdate"
              fieldLabel="Phone:"
              fieldData={user.phoneNumber}
              handleClick={handleClick}
              updateField={updateField || initialValue}
              handleUserUpdate={handleUserUpdate}
              objectKey="phoneNumber"
            ></UserInfoField>
          </UserInfoListItem>
          <UserInfoListItem>
            <UserInfoField
              fieldName="userCityUpdate"
              fieldLabel="City:"
              fieldData={user.city}
              handleClick={handleClick}
              updateField={updateField || initialValue}
              handleUserUpdate={handleUserUpdate}
              objectKey="city"
            ></UserInfoField>
          </UserInfoListItem>
        </UserInfoList>
        <LogOutButton type="button" onClick={handleLogout}>
          <TbLogout
            style={{
              width: "18px",
              height: "18px",
              color: "rgba(245, 146, 86, 1)",
            }}
          />
          Log Out
        </LogOutButton>
      </div>
    </UserCardContainer>
  );
 }


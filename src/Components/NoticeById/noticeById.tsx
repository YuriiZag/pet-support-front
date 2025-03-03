import {
  NoticeAwatarWraper,
  NoticeAvatar,
  NoticeCategory,
  NoticeTitle,
  NoticeInfoList,
  FavouriteNoticeButton,
  NoticeInfo,
  NoticeInfoWrapper,
  FavouriteButton,
  ContactButton,
  ContactList,
  ContactListItem,
  ComentsWraper,
  SingleNoticeContainer,
  SingleStyleContainer,
} from "./noticeById.styled";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import ageCalc from "../../Helpers/ageCalculator";
import { useNavigate } from "react-router-dom";
import { INotice } from "../../interfaces/noticeIntefaces";
import { ErrorFiller } from "../Error/error";
import { AxiosError } from "axios";

interface INoticeProps {
  notice: INotice | null;
  singleNotice: boolean;
  updateFavouriteStatus: (data: {
    id: string;
    favouriteStatus: boolean;
    singleNotice: boolean;
  }) => void;
  isLoggedIn: boolean;
  favouriteList: string[];
  error: AxiosError | null
}

export const Notice = ({
  notice,
  singleNotice,
  updateFavouriteStatus,
  isLoggedIn,
  favouriteList,
  error
}: INoticeProps) => {

  const navigate = useNavigate();

  const handleFavouriteChange = (id: string) => {
    if (!isLoggedIn) {
      return navigate("/login");
    }

    if (favouriteList.includes(id)) {
      updateFavouriteStatus({
        id: id,
        favouriteStatus: false,
        singleNotice: singleNotice,
      });
    }
    if (!favouriteList.includes(id)) {
      updateFavouriteStatus({
        id: id,
        favouriteStatus: true,
        singleNotice: singleNotice,
      });
    }
  };

  if (!notice) {
    return <ErrorFiller></ErrorFiller>
  }


    return (
      <SingleNoticeContainer singleNotice={singleNotice}>
        <SingleStyleContainer singleNotice={singleNotice}>
          <NoticeAwatarWraper>
            <NoticeAvatar src={notice.avatar} alt="petAvatar"></NoticeAvatar>
            <NoticeCategory>{notice.category}</NoticeCategory>
            {!singleNotice && (
              <FavouriteNoticeButton
                onClick={(e) => handleFavouriteChange(notice._id)}
              >
                {favouriteList.includes(notice._id) ? (
                  <IoHeartSharp
                    style={{ width: "22px", height: "24px", color: "red" }}
                  />
                ) : (
                  <IoHeartOutline style={{ width: "22px", height: "24px" }} />
                )}
              </FavouriteNoticeButton>
            )}
          </NoticeAwatarWraper>
          <div>
            <NoticeTitle>{notice.title}</NoticeTitle>
            <NoticeInfoList>
              {singleNotice && (
                <li>
                  <NoticeInfo>
                    <NoticeInfoWrapper>Name:</NoticeInfoWrapper>
                    <span>{notice.name}</span>
                  </NoticeInfo>
                </li>
              )}
              {singleNotice && (
                <li>
                  <NoticeInfo>
                    <NoticeInfoWrapper>Birthday:</NoticeInfoWrapper>
                    <span>{notice.birthDate}</span>
                  </NoticeInfo>
                </li>
              )}
              <li>
                <NoticeInfo>
                  <NoticeInfoWrapper>Breed:</NoticeInfoWrapper>
                  <span>{notice.breed}</span>
                </NoticeInfo>
              </li>
              <li>
                <NoticeInfo>
                  <NoticeInfoWrapper>Place:</NoticeInfoWrapper>
                  <span>{notice.location}</span>
                </NoticeInfo>
              </li>
              {singleNotice && (
                <>
                  <li>
                    <NoticeInfo>
                      <NoticeInfoWrapper>Sex:</NoticeInfoWrapper>
                      <span>{notice.sex}</span>
                    </NoticeInfo>
                  </li>
                  <li>
                    <NoticeInfo>
                      <NoticeInfoWrapper>Email:</NoticeInfoWrapper>
                      <span>{notice.email}</span>
                    </NoticeInfo>
                  </li>
                  <li>
                    <NoticeInfo>
                      <NoticeInfoWrapper>Phone:</NoticeInfoWrapper>
                      <span>{notice.phoneNumber}</span>
                    </NoticeInfo>
                  </li>
                </>
              )}
              {!singleNotice && (
                <li>
                  <NoticeInfo>
                    <NoticeInfoWrapper>Age:</NoticeInfoWrapper>
                    <span>{ageCalc(notice.birthDate)}</span>
                  </NoticeInfo>
                </li>
              )}
              {notice.price !== null && (
                <li>
                  <NoticeInfo>
                    <NoticeInfoWrapper>Price:</NoticeInfoWrapper>
                    <span>{notice.price}</span>
                  </NoticeInfo>
                </li>
              )}
            </NoticeInfoList>
          </div>
        </SingleStyleContainer>
        {singleNotice && (
          <NoticeInfo>
            <ComentsWraper>Comments: {notice.comments}</ComentsWraper>
          </NoticeInfo>
        )}

        {singleNotice && (
          <ContactList>
            <ContactListItem>
              <ContactButton href={`tel:${notice.phoneNumber}`}>
                Contact
              </ContactButton>
            </ContactListItem>
            <ContactListItem>
              <FavouriteButton
                onClick={(e) => handleFavouriteChange(notice._id)}
              >
                {Array.isArray(favouriteList) && favouriteList.includes(notice._id) ? "Remove from" : "Add to"}
                <IoHeartSharp
                  style={{ width: "22px", height: "24px", color: "red" }}
                />
              </FavouriteButton>
            </ContactListItem>
          </ContactList>
        )}
      </SingleNoticeContainer>
    );

};



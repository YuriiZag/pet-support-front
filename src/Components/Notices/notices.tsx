import { HiMiniTrash } from "react-icons/hi2";

import {
  NoticeButton,
  NoticeButtonList,
  NoticeButtonListItem,
  NoticeContainer,
  NoticesList,
} from "./notices.styled";
import { useEffect, useState } from "react";
import { ModalWindow } from "../Modal/modal";
import {
  deleteNotice,
  fetchNoticeById,
  patchFavouriteStatus,
} from "../../api/noticesAPI";
import { useNavigate, useParams } from "react-router-dom";
import { Notice } from "../NoticeById/noticeById";
import { RxCross2 } from "react-icons/rx";
import { getIsLoggedIn } from "../../Redux/selectors";
import { currentUser } from "../../Redux/operations";
import { ModalCloseButton } from "../Modal/modal.styled";
import { IUser } from "../../interfaces/authInterface";
import { INotice } from "../../interfaces/noticeIntefaces";
import { useAppDispatch, useAppSelector } from "../../customHooks/customHooks";
import axios, { AxiosError, AxiosResponse } from "axios";
import { errorToastEmitter, succesToastEmitter } from "../Toaster/toaste";

interface INoticeListProps {
  noticesList: INotice[] | null;
  user: IUser | null;
  handleDelete: (id: string) => void;
}

export const Notices = ({
  noticesList,
  user,
  handleDelete,
}: INoticeListProps) => {
  const [modalOpenState, setModalOpenState] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<string>("sell");
  const [favouriteList, setFavouriteList] = useState<string[]>([]);
  const [notices, setNotices] = useState<INotice[]>([]);
  const [noticeById, setNoticeById] = useState<INotice | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const { category } = useParams();
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(currentUser());
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (noticesList) {
      setNotices(noticesList);
    }
    if (user !== null) {
      setFavouriteList(user.favouriteNoticeId);
    }
  }, [noticesList, user]);

  const toggleModal = () => {
    setModalOpenState(!modalOpenState);
  };

  const responseHandle = (
    response: AxiosError | AxiosResponse<{ notices: INotice }> | null
  ) => {
    if (response !== null && !axios.isAxiosError(response)) {
      setNoticeById(response.data.notices);
    } 
  };

  const moreInfoHandler = async (id: string) => {
    if (category) {
      setCurrentCategory(category);
    }
    navigate(`/notices/${id}`, { replace: true });
    const response = await fetchNoticeById(id);
    await responseHandle(response);
    await setModalOpenState(true);
  };

  const updateFavouriteStatus = async (data: {
    id: string;
    favouriteStatus: boolean;
    singleNotice: boolean;
  }) => {
    try {
      const response = await patchFavouriteStatus(data);
      if (
        (category === "favorite ads" || data.singleNotice) &&
        data?.favouriteStatus === false
      ) {
        const newNoticeList = notices.filter(
          (notice) => notice._id !== data.id
        );
        setNotices(newNoticeList);
      }
      setFavouriteList(response.data.favouriteList);
    } catch (error) {
     if (axios.isAxiosError(error)) {
      setError(error)
      errorToastEmitter(error.response?.data.message)
     } 
     return null
    }
  };

  const handleNoticeDelete = async (id: string) => {
    try {
      await deleteNotice(id);
      handleDelete(id);
      succesToastEmitter("notice succsefuly deleted")
    } catch (error) {
      if (axios.isAxiosError(error)) {
        errorToastEmitter(error.response?.data.message)
      }
      return null
    }
  };

  useEffect(() => {
    if (modalOpenState === false) {
      navigate(`/notices/${currentCategory}`, { replace: true });
    }

    // eslint-disable-next-line
  }, [modalOpenState]);

  return (
    <>
      <NoticesList>
        {notices &&
          notices.map((notice) => (
            <NoticeContainer key={notice._id}>
              <Notice
                error={error}
                notice={notice}
                singleNotice={false}
                updateFavouriteStatus={updateFavouriteStatus}
                isLoggedIn={isLoggedIn}
                favouriteList={favouriteList}
              ></Notice>
              <NoticeButtonList>
                <NoticeButtonListItem>
                  <NoticeButton
                    type="button"
                    onClick={() => moreInfoHandler(notice._id)}
                  >
                    Learn more
                  </NoticeButton>
                </NoticeButtonListItem>
                <NoticeButtonListItem>
                  {user !== undefined &&
                    user !== null &&
                    Array.isArray(user.ownNoticeId) &&
                    user.ownNoticeId.includes(notice._id) && (
                      <NoticeButton
                        type="button"
                        onClick={() => handleNoticeDelete(notice._id)}
                      >
                        Delete&nbsp;&nbsp;
                        <HiMiniTrash
                          style={{ width: "20px", height: "20px" }}
                        />
                      </NoticeButton>
                    )}
                </NoticeButtonListItem>
              </NoticeButtonList>
            </NoticeContainer>
          ))}
      </NoticesList>
      {modalOpenState && (
        <ModalWindow toggleModal={toggleModal}>
          <ModalCloseButton type="button" onClick={toggleModal}>
            <RxCross2 style={{ width: "15px", height: "15px" }} />
          </ModalCloseButton>
          <Notice
            error={error}
            notice={noticeById === undefined ? null : noticeById}
            singleNotice={true}
            updateFavouriteStatus={updateFavouriteStatus}
            isLoggedIn={isLoggedIn}
            favouriteList={favouriteList}
          ></Notice>
        </ModalWindow>
      )}
    </>
  );
};

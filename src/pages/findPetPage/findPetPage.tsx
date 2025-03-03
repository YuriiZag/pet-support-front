import { useEffect, useState } from "react";
import { FindPetCategoryList } from "../../Components/CategoryList/categoryList";
import { FindPetSearchBar } from "../../Components/FindPetSearchBar/findPetSearchBar";
import {
  AddNoticeButton,
  AddNoticeWrapper,
  ButtonAddContainer,
  FindPetContainer,
  FindPetHero,
  FindPetStyledContainer,
} from "./findPetPage.styled";
import { Notices } from "../../Components/Notices/notices";
import { FiPlus } from "react-icons/fi";
import { ModalWindow } from "../../Components/Modal/modal";
import { RxCross2 } from "react-icons/rx";
import { ModalCloseButton } from "../../Components/Modal/modal.styled";
import { AddNoticeForm } from "../../Components/AddNoticeForm/addNoticeForm";
import { currentUser } from "../../Redux/operations";
import { getIsLoggedIn, getUser } from "../../Redux/selectors";
import { useNavigate } from "react-router-dom";
import { INotice } from "../../interfaces/noticeIntefaces";
import { useAppDispatch, useAppSelector } from "../../customHooks/customHooks";
import axios, { AxiosError, AxiosResponse } from "axios";
import { ErrorFiller } from "../../Components/Error/error";

const FindPetPage = () => {
  const dispatch = useAppDispatch();
  const [noticesList, setNoticesList] = useState<INotice[] | null>(null);
  const [modalOpenState, setModalOpenState] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    if (noticesList) {
      const newNotices = noticesList.filter(
        (notice: INotice) => notice._id !== id
      );
      setNoticesList(newNotices);
    }
  };

  const handleAddNotice = (newNotice: INotice) => {
    if (noticesList) {
      setNoticesList([...noticesList, newNotice]);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(currentUser());
    }
  }, [dispatch, isLoggedIn]);

  const user = useAppSelector(getUser);

  const toggleModal = () => {
    setModalOpenState(!modalOpenState);
  };

  const handleNoticeAddition = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      toggleModal();
    }
  };

  const dataHandler = (
    response: AxiosError | AxiosResponse<{notices: INotice[]}> | null
  ) => {
    if (response !== null && !axios.isAxiosError(response)) {
      setNoticesList(response.data.notices);
    } else if (response !== null && axios.isAxiosError(response)) {
      setError(response);
    }
  };


  return (
    <FindPetContainer>
      <FindPetHero>Find your favourite pet</FindPetHero>
      <FindPetSearchBar dataHandler={dataHandler}></FindPetSearchBar>
      <FindPetStyledContainer>
        <FindPetCategoryList dataHandler={dataHandler}></FindPetCategoryList>
        <AddNoticeButton type="button" onClick={handleNoticeAddition}>
          <ButtonAddContainer>
            <FiPlus style={{ width: "22px", height: "22px" }} />
          </ButtonAddContainer>
          <AddNoticeWrapper>Add pet</AddNoticeWrapper>
        </AddNoticeButton>
      </FindPetStyledContainer>
      {error === null ? (
        <Notices
          noticesList={noticesList}
          user={user !== null ? user : null}
          handleDelete={handleDelete}
        ></Notices>
      ) : <ErrorFiller></ErrorFiller>}

      {modalOpenState && (
        <ModalWindow toggleModal={toggleModal} modalOpenState={modalOpenState}>
          <AddNoticeForm
            user={user}
            toggleModal={toggleModal}
            handleNotice={handleAddNotice}
          ></AddNoticeForm>
          <ModalCloseButton type="button" onClick={toggleModal}>
            <RxCross2 style={{ width: "15px", height: "15px" }} />
          </ModalCloseButton>
        </ModalWindow>
      )}
    </FindPetContainer>
  );
};

export default FindPetPage;

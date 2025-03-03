import { UserInfoCard } from "../../Components/UserInfoCard/userInfoCard";
import {
  AddPetButton,
  AddStyledConatiner,
  ButtonInfoLabel,
  HeadingWrapper,
  PetsStyleContainer,
  UserInfoLabels,
  UserPageContainer,
} from "./userPage.styled";
import { FaPlus } from "react-icons/fa6";

import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { ModalCloseButton } from "../../Components/Modal/modal.styled";
import { ModalWindow } from "../../Components/Modal/modal";
import { AddPetForm } from "../../Components/AddPetForm/addPetForm";

import { deletePet, fetchPets } from "../../api/petsAPI";
import { PetsData } from "../../Components/PetsData/petsData";
import { IPet } from "../../interfaces/petInterface";
import axios, { AxiosError } from "axios";
import { ErrorFiller } from "../../Components/Error/error";
import { errorToastEmitter, succesToastEmitter } from "../../Components/Toaster/toaste";

const UserPage = () => {
  const [modalOpenState, setModalOpenState] = useState<boolean>(false);
  const [petsList, setPetsList] = useState<IPet[]>([]);
  const [error, setError] = useState<AxiosError | null>(null);

  const handleData = (data: IPet) => {
    setPetsList([...petsList, data]);
  };

  const handleDelete =async (id: string) => {
    try {
    await deletePet(id)
    const updatedList = petsList.filter((pet: IPet) => pet._id !== id);
    await setPetsList(updatedList);
    await succesToastEmitter("pet succesfully deleted")
    } catch (error) {
      if (axios.isAxiosError(error)) {
        errorToastEmitter(error.response?.data.message)
      }
      return null
    }
  };

  const handleFetchPets = async () => {
    try {
      const response = await fetchPets();
      setPetsList(response.data.pets);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error);
     
      }
      return null;
    }
  };
  const toggleModal = () => {
    setModalOpenState(!modalOpenState);
  };

  useEffect(() => {
    handleFetchPets();
  }, []);

  return (
    <>
      <UserPageContainer>
        <div>
          <UserInfoLabels>My information:</UserInfoLabels>
          <UserInfoCard></UserInfoCard>
        </div>
        <PetsStyleContainer>
          <HeadingWrapper>
            <UserInfoLabels>My pets:</UserInfoLabels>
            <AddStyledConatiner>
              <ButtonInfoLabel>Add pet</ButtonInfoLabel>
              <AddPetButton onClick={toggleModal}>
                <FaPlus style={{ width: "24px", height: "24px" }} />
              </AddPetButton>
            </AddStyledConatiner>
          </HeadingWrapper>
          {error ? (
            <ErrorFiller></ErrorFiller>
          ) : (
            <PetsData
              petsList={petsList}
              handleDelete={handleDelete}
            ></PetsData>
          )}
        </PetsStyleContainer>
      </UserPageContainer>
      {modalOpenState && (
        <ModalWindow toggleModal={toggleModal}>
          <AddPetForm
            toggleModal={toggleModal}
            handleData={handleData}
          ></AddPetForm>
          <ModalCloseButton type="button" onClick={toggleModal}>
            <RxCross2 style={{ width: "15px", height: "15px" }} />
          </ModalCloseButton>
        </ModalWindow>
      )}
    </>
  );
};
export default UserPage;

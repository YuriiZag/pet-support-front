import { HiMiniTrash } from "react-icons/hi2";
import {
  PetDataInfo,
  PetDataItem,
  PetDataLabel,
  PetDeleteButton,
  PetsList,
  PetsListAvatar,
  PetsListItem,
} from "./petsData.styled";

import { IPet } from "../../interfaces/petInterface";


interface IPetDataProps {
  petsList: IPet[];
  handleDelete: (id: string) => void;
}

export const PetsData = ({ petsList, handleDelete }: IPetDataProps) => {

  return (
    <PetsList>
      {petsList.map((pet) => {
        return (
          <PetsListItem key={pet._id}>
            <PetsListAvatar src={pet.avatar} alt="petAvatar" />
            <PetDataInfo>
              <PetDataItem>
                <PetDataLabel>Name:&nbsp;</PetDataLabel>
                {pet.name}
              </PetDataItem>
              <PetDataItem>
                <PetDataLabel>Date of Bitrth:&nbsp;</PetDataLabel>
                {pet.birthDate}
              </PetDataItem>
              <PetDataItem>
                <PetDataLabel>Breed:&nbsp;</PetDataLabel>
                {pet.breed}
              </PetDataItem>
              <PetDataItem>
                <PetDataLabel>Comments:&nbsp;</PetDataLabel>
                {pet.comments}
              </PetDataItem>
            </PetDataInfo>
            <PetDeleteButton
              type="button"
              onClick={() => {
                handleDelete(pet._id);
              }}
            >
              <HiMiniTrash style={{ width: "100%", height: "100%" }} />
            </PetDeleteButton>
          </PetsListItem>
        );
      })}
    </PetsList>
  );
};

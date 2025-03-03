import { ICreatedNotice } from "../../interfaces/noticeIntefaces";
import {
  ActiveRadioLabel,
  CategoryRadioInput,
  CategoryRadioList,
  PassiveRadioLabel,
} from "./categoryRadio.styled";

interface IRadio {
  formData: ICreatedNotice;
  setFormData: (notice: ICreatedNotice) => void
}

export const CategoryRadio = ({ formData, setFormData }: IRadio) => {
  return (
    <CategoryRadioList>
        {formData.category === "sell" ? (
          <ActiveRadioLabel htmlFor="sell">
            sell
            <CategoryRadioInput
              type="radio"
              id="sell"
              value="sell"
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            />
          </ActiveRadioLabel>
        ) : (
          <PassiveRadioLabel htmlFor="sell">
            sell
            <CategoryRadioInput
              type="radio"
              id="sell"
              value="sell"
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            />
          </PassiveRadioLabel>
        )}
        {formData.category === "lost/found" ? (
          <ActiveRadioLabel htmlFor="lost/found">
            lost/found
            <CategoryRadioInput
              type="radio"
              id="lost/found"
              value="lost/found"
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            />
          </ActiveRadioLabel>
        ) : (
          <PassiveRadioLabel htmlFor="lost/found">
            lost/found
            <CategoryRadioInput
              type="radio"
              id="lost/found"
              value="lost/found"
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            />
          </PassiveRadioLabel>
        )}

        {formData.category === "in good hands" ? (
          <ActiveRadioLabel htmlFor="in good hands">
            in good hands
            <CategoryRadioInput
              type="radio"
              id="in good hands"
              value="in good hands"
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            />
          </ActiveRadioLabel>
        ) : (
          <PassiveRadioLabel htmlFor="in good hands">
            in good hnads
            <CategoryRadioInput
              type="radio"
              id="in good hands"
              value="in good hands"
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            />
          </PassiveRadioLabel>
        )}
    </CategoryRadioList>
  );
};

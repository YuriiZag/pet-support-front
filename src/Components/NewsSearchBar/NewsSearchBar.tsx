import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

import { IoSearch } from "react-icons/io5";
import {
  NewsClearText,
  NewsSearchContainer,
  NewsSearchInput,
  NewsSvgWrapper,
} from "./NewsSearchBar.styled";
interface ISearchBarProps {
  setSearchParams: (params: Record<string, string> | string) => void
}


export const NewsSearchBar = ({ setSearchParams } : ISearchBarProps) => {
  const [querry, setQuerry] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuerry(e.target.value);
    setSearchParams({ title: e.target.value.toLowerCase() });
  };

  const handleInputClear = () => {
    setQuerry("");
    setSearchParams("");
  }

  return (
    <NewsSearchContainer>
      <NewsSearchInput
        type="text"
        value={querry}
        onChange={handleInputChange}
        placeholder="Search"
      />
      {querry === "" ? (
        <NewsSvgWrapper>
          <IoSearch style={{ width: "20px", height: "20px" }}></IoSearch>
        </NewsSvgWrapper>
      ) : (
        <NewsClearText type="button" onClick={handleInputClear}>
          <RxCrossCircled style={{ width: "20px", height: "20px" }} />
        </NewsClearText>
      )}
    </NewsSearchContainer>
  );
};

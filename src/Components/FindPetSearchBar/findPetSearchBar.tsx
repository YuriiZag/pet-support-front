import { useCallback, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import {
  PetSearchBarLabel,
  SearchIconContainer,
  PetSearchBar,
  NoticeClearTextButton,
} from "./findPetSearchBar.styled";
import { useLocation, useSearchParams } from "react-router-dom";
import { throttle } from "lodash";
import {
  fetchNoticeByTitle,
  fetchNoticesByCategory,
} from "../../api/noticesAPI";
import { INotice } from "../../interfaces/noticeIntefaces";
import { AxiosError, AxiosResponse } from "axios";


export const FindPetSearchBar = ({
  dataHandler,
}: {
  dataHandler: (response: AxiosError | AxiosResponse<{notices: INotice[]}> | null) => void;
}) => {
  const [searchQuerry, setSearchQuerry] = useState<string>("");
  const [params, setSearchParams] = useSearchParams();
  const location = useLocation();

  // eslint-disable-next-line
  const throtledFunction = useCallback(
    throttle(async (value: string) => {
      setSearchParams({ title: value });

      const response = await fetchNoticeByTitle(value);
      dataHandler(response);
    }, 1000),
    []
  );

  const fetchByCategory = async (category: string) => {
    const response = await fetchNoticesByCategory("sell");
    if (Array.isArray(response)) {
      dataHandler(response);
    }
    
  }


  useEffect(() => {
    setSearchParams("");
    // eslint-disable-next-line
  }, []);


  useEffect(() => {
    if (params.get("title") !== null && params.get("title") === "") {
      const category = location.pathname.split("/");
      fetchByCategory(category[2])
    }
    //eslint-disable-next-line
  }, [params])

  const searchBarHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuerry(e.target.value);
    throtledFunction(e.target.value);
  };

  const handleInputClear = () => {
    setSearchQuerry("");
    setSearchParams({ title: "" });
  };

  return (
    <PetSearchBarLabel htmlFor="findPet">
      <PetSearchBar
        name="findPet"
        type="text"
        placeholder="Search"
        value={searchQuerry}
        onChange={searchBarHandler}
      />
      {searchQuerry === "" ? (
        <SearchIconContainer>
          <IoSearch style={{ width: "20px", height: "20px" }}></IoSearch>
        </SearchIconContainer>
      ) : (
        <NoticeClearTextButton type="button" onClick={handleInputClear}>
          <RxCrossCircled style={{ width: "20px", height: "20px" }} />
        </NoticeClearTextButton>
      )}
    </PetSearchBarLabel>
  );
};

import { useEffect, useState } from "react";

import {
  ActiveCategory,
  PetCategoryList,
  InActiveCategory,
} from "./categoryList.styled";
import {
  fetchNoticesByCategory,
  getFavouriteNotices,
  getOwnNotices,
} from "../../api/noticesAPI";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../Redux/selectors";
import { INotice } from "../../interfaces/noticeIntefaces";
import axios, { AxiosError, AxiosResponse } from "axios";

export const FindPetCategoryList = ({
  dataHandler,
}: {
  dataHandler: (response: AxiosError | AxiosResponse<{notices: INotice[]}> | null ) => void;
}) => {

  const [category, setCategory] = useState("sell");
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const categoryChangeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const text = (e.target as HTMLButtonElement).textContent;
    switch (text) {
      case "sell":
        setCategory("sell");
        navigate("/notices/sell", { replace: true });
        break;
      case "lost/found":
        setCategory("lost found");
        navigate("/notices/lost-found", { replace: true });
        break;
      case "in good hands":
        setCategory("in good hands");
        navigate("/notices/in-good-hands", { replace: true });
        break;
      case "favorite ads":
        setCategory("favorite ads");
        navigate("/notices/favourite-ads", { replace: true });
        break;
      case "my ads":
        setCategory("my ads");
        navigate("/notices/my-ads", { replace: true });
        break;
      default:
        setCategory("sell");
        navigate("/notices/sell", { replace: true });
        break;
    }
  }; 
  async function fetchNotices() {
    let response: AxiosError | AxiosResponse<{notices: INotice[]}> | null = null
    try {
      if (["sell", "lost found", "in good hands"].includes(category)) {
        response = await fetchNoticesByCategory(category);
        
      } else if (category === "my ads") {
        response = await getOwnNotices();
   
      } else if (category === "favorite ads") {
        response = await getFavouriteNotices();
        
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        response = error
      }
      return null
    }
    dataHandler(response)
    
  }

  useEffect(() => {
    fetchNotices();
    navigate(`/notices/${category}`, { replace: true });
    // eslint-disable-next-line
  }, [category]);

  return (
    <PetCategoryList>
      <li>
        {category === "sell" ? (
          <ActiveCategory type="button">sell</ActiveCategory>
        ) : (
          <InActiveCategory type="button" onClick={categoryChangeHandler}>
            sell
          </InActiveCategory>
        )}
      </li>
      <li>
        {category === "lost found" ? (
          <ActiveCategory type="button">lost/found</ActiveCategory>
        ) : (
          <InActiveCategory type="button" onClick={categoryChangeHandler}>
            lost/found
          </InActiveCategory>
        )}
      </li>
      <li>
        {category === "in good hands" ? (
          <ActiveCategory type="button">in good hands</ActiveCategory>
        ) : (
          <InActiveCategory type="button" onClick={categoryChangeHandler}>
            in good hands
          </InActiveCategory>
        )}
      </li>
      {isLoggedIn && (
        <>
          <li>
            {category === "favorite ads" ? (
              <ActiveCategory type="button">favorite ads</ActiveCategory>
            ) : (
              <InActiveCategory type="button" onClick={categoryChangeHandler}>
                favorite ads
              </InActiveCategory>
            )}
          </li>
          <li>
            {category === "my ads" ? (
              <ActiveCategory type="button">my ads</ActiveCategory>
            ) : (
              <InActiveCategory type="button" onClick={categoryChangeHandler}>
                my ads
              </InActiveCategory>
            )}
          </li>
        </>
      )}
    </PetCategoryList>
  );
};


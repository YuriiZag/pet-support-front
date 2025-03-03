import { GiOuroboros } from "react-icons/gi";
import { LoaderContainer, LoadingPhrase, LoadingSvgContainer } from "./loader.styled";

export const Loader = () => {
  return (
    <LoaderContainer>
      <LoadingSvgContainer>
        <GiOuroboros style={{width: "100%", height: "100%"}}/>
      </LoadingSvgContainer>
      <LoadingPhrase>loading...</LoadingPhrase>
    </LoaderContainer>
  );
};

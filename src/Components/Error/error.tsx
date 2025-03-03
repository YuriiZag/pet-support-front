import SadPepe from "../../pictures/error.png";
import {
  ErrorContainer,
  ErrorHeading,
  ErrorImg,
  ErrorPhrase,
} from "./error.styled";

export const ErrorFiller = () => {
  return (
    <ErrorContainer>
      <ErrorImg src={SadPepe} alt="sad Pepe"></ErrorImg>
      <div>
        <ErrorHeading>OOPS ERROR!</ErrorHeading>
        <ErrorPhrase> Content not found</ErrorPhrase>
      </div>
    </ErrorContainer>
  );
};

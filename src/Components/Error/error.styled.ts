import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10%;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const ErrorHeading = styled.h1`
  @media screen and (min-width: 768px) {
    font-size: 64px;
}
`;
export const ErrorPhrase = styled.p`
  font-weight: 600;
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 34px;
    text-align: center;
  }

`;

export const ErrorImg = styled.img`
  width: 60%;
  @media screen and (min-width: 768px) {
  width: 25%;
  }
`;

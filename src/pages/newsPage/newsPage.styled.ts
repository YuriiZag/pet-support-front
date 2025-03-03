import styled from "styled-components";

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
export const NewsHeading = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

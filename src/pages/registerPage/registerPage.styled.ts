import styled from "styled-components";
import backgroundMobileImg from "../../pictures/Vector.png";
import backgroundTabletImg from "../../pictures/loginTabletBackground.png"
import backgroundPCImg from "../../pictures/loginPcBackground.png"

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;

  padding: 0 20px;
  height: 91.3vh;
  
  background-image: url(${backgroundMobileImg});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 280px;
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {
    background-image: url(${backgroundTabletImg});
    background-position-y: 400px;
  }

  @media screen and (min-width: 1024px) {
    background-image: url(${backgroundPCImg});
    background-position-y: 300px;
  }
`;
export const RegisterHeading = styled.h1`
  text-align: center;
  margin-top: 42px;
  margin-bottom: 40px;
  padding: 0;
  font-size: 24px;
  font-weight: 700;
`;

export const RegStyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    background-color: white;
    border-radius: 40px;
    width: 608px;
    height: 500px;
    margin-top: 80px;
  }
  @media screen and (min-width: 1024px) {
    width: 618px;
  }
`;

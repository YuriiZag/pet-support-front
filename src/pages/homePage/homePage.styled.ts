import styled from "styled-components";
import dogImg from "../../pictures/golden-retriever.png";
import tabletDogImg from "../../pictures/golenRetrieverTablet.png";
import mobileBackgroundImg from "../../pictures/Vector.png";
import tabletBackgroundImg from "../../pictures/tabletHeroBackground.png";
import pcBackgroundImg from "../../pictures/pcHeroBackground.png";
import heart from "../../pictures/heart.png";

export const HomeContainer = styled.div`
  box-sizing: border-box;
  position: relative;

  padding: 90px 20px 0 20px;
  height: calc(100% - 80px);

  background-image: url(${mobileBackgroundImg});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 140%;
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {
    background-image: url(${tabletBackgroundImg});
    background-size: 150%;
    background-position-y: -20%;
    background-position-x: 25%
  }

  @media screen and (min-width: 1024px) {
    height: 90%;
    background-image: url(${pcBackgroundImg});
    background-size: contain;
    background-position-y: 100%;
  }
`;

export const DogBackGround = styled.div`
  position: absolute;
  margin-top: 40px;
  bottom: 0;
  left: 50vw;
  transform: translate(-50%, 0);

  width: 85%;
  height: 329px;

  background-image: url(${dogImg});
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {

    width: 70%;
    height: 450px;
    background-size: contain;
    background-image: url(${tabletDogImg});
  }

  @media screen and (min-width: 1024px) {
    width: 50%;
    height: 90%;
    position: absolute;
    right: -8%;
    left: auto;
    transform: translate(0, 0);
    background-size: contain;
    background-image: url(${tabletDogImg});
  }
`;

export const Hero = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 68px;
    line-height: 100px;
  }
  @media screen and (min-width: 1024px) {
    width: 588px;
  }
`;

export const StyledHeart = styled.div`
  top: 7%;
  right: 40%;
  position: absolute;
  width: 90px;
  height: 90px;
  background-image: url(${heart});
  background-size: contain;
  background-repeat: no-repeat;

  @media screen and (width < 1024px) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;

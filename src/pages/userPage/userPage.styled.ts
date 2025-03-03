import styled from "styled-components";

export const UserPageContainer = styled.div`
  height: 100vh;
  padding-top: 60px;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1024px) {
   display: flex; 
   gap: 32px;
  }
`;

export const PetsStyleContainer = styled.div`
  width: 100%;
`

export const AddStyledConatiner = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfoLabels = styled.p`
  font-size: 20px;
  font-weight: 500px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
  
`;
export const ButtonInfoLabel = styled.p`
  font-size: 20px;
  font-weight: 500px;
`;
export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

`;

export const AddPetButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  margin-left: 15px;

  color: white;
  background-color: rgba(245, 146, 86, 1);
  border: none;
  border-radius: 50%;
`;

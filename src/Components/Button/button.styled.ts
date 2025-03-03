import styled from "styled-components"

export const MainButton = styled.button`
  border: 2px solid #F59256;
  background-color: #F59256;
  border-radius: 40px;
  
  padding: 9px;
  text-align: center;
  
  width: 100%;
  color: white;

  font-size: 20px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    width: 280px
  }
`

export const SecondaryButton = styled.button`
  border: 2px solid #F59256;
  background-color: transparent;
  border-radius: 40px;
  
  padding: 9px;
  text-align: center;
  margin-bottom: 12px;
  
  width: 100%;
  color: black;
  font-size: 20px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-bottom: 0;
  }
`


export const AuthMainButton = styled.button`
  border: 2px solid #F59256;
  background-color: #F59256;
  border-radius: 40px;
  
  padding: 9px;
  text-align: center;
  
  width: 100%;
  color: white;

  font-size: 20px;
  font-weight: 500;
`

export const AuthSecondaryButton = styled.button`
  border: 2px solid #F59256;
  background-color: transparent;
  border-radius: 40px;
  
  padding: 9px;
  text-align: center;
  margin-bottom: 12px;
  
  width: 100%;
  color: black;
  font-size: 20px;
  font-weight: 500;
`
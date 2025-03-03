import styled from "styled-components";

export const PetSearchBarLabel = styled.label`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    @media screen and (min-width: 768px) {
    width: 608px;
  }
  @media screen and (min-width: 1024px) {

  }
`

export const PetSearchBar = styled.input`
    width: 100%;

    border: none;
    border-radius: 20px;
    background-color: white;
    padding: 12px 9px;
    ::placeholder{
        font-weight: 500;
        font-size: 16px;
        color: #535353;
}
`
export const SearchIconContainer = styled.div`
    position: absolute;
    right: 8px;
    top: 12px;
    color:  #535353;
`

export const NoticeClearTextButton = styled.button`
    position: absolute;
    right: 8px;
    top: 12px;
    color:  #535353;
    border: none;
    background-color: transparent;
`
import styled from "styled-components";

export const NewsSearchContainer = styled.div`
  position: relative;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    width: 608px;
    margin-bottom: 40px;
  }
`;

export const NewsSearchInput = styled.input`
  font-size: 16px;
  font-weight: 500;
  width: calc(100% - 40px);

  border: none;
  border-radius: 20px;
  padding: 9px 12px;

  ::placeholder {
    color: rgba(83, 83, 83, 1);
    font-size: 16px;
    font-weight: 500;
  }

`;

export const NewsSvgWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 25px;
`;

export const NewsClearText = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 8px;
  right: 25px;

  border-radius: 50%;
  border: none;
  background-color: transparent;
`;

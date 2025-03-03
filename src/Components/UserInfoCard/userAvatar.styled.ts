import styled from "styled-components";

export const UserAvatarWrapper = styled.div`
  border-radius: 50%;
  width: 233px;
  height: 233px;
  background-color: rgba(245, 146, 86, 0.5);

`;

export const UserAvatarImage = styled.img`
  border-radius: 50%;
  width: 233px;
  height: 233px;
`

export const ChangeAvatarLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  margin-top: 14px;
  @media screen and (min-width: 768px) {
    position: absolute;
    right: 20px;
  }
  @media screen and (min-width: 1024px) {
    top: 231px;
    right: 16px;
  }
`;

export const ChangeAvatarInput = styled.input`
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
`;

export const ButtonTextWrapper = styled.span`
  margin-left: 4px;
  font-size: 12px;
  font-weight: 400;
`;
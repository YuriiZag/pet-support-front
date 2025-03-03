import { useState } from "react";
import {
  UserAvatarImage,
  UserAvatarWrapper,
  ChangeAvatarLabel,
  ChangeAvatarInput,
  ButtonTextWrapper,
} from "./userAvatar.styled";
import convertToBase64 from "../../Helpers/imageConverter";
import { HiCamera } from "react-icons/hi2";
import { updateUser } from "../../Redux/operations";
import { useAppDispatch } from "../../customHooks/customHooks";

export const UserAvatar = ({ avatar }: { avatar: string }) => {
  const dispatch = useAppDispatch();
  const handleAvatarUpdate = (data: string) => {
    dispatch(updateUser({ avatar: data }));
  };
  const [cryptImage, setCryptImage] = useState<string | null>(null);

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      throw new Error("file list is empty");
    }
    convertToBase64(e.target.files[0])
      .then((base64String) => {
        if (e.target.files) {
          const imageString = `data:${e.target.files[0].type};base64,${base64String}`;
          setCryptImage(imageString);
          handleAvatarUpdate(imageString);
        }
      })
      .catch((error) => {
        console.error("Error converting file:", error);
      });
  };

  return (
    <>
      <UserAvatarWrapper>
        <UserAvatarImage
          src={cryptImage !== null ? cryptImage : avatar}
          alt="user avatar"
        />
      </UserAvatarWrapper>
      <ChangeAvatarLabel>
        <ChangeAvatarInput
          type="file"
          accept=".png,.webp,.jpeg,.svg,.jpg"
          onChange={onFileInputChange}
        />
        <HiCamera
          style={{
            width: "20px",
            height: "20px",
            color: "rgba(245, 146, 86, 1)",
          }}
        />
        <ButtonTextWrapper>Edit photo</ButtonTextWrapper>
      </ChangeAvatarLabel>
    </>
  );
};


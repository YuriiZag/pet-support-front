import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { DropZoneContainer, DropZoneImage } from "./dropzone.styled";
import { BsPlusLg } from "react-icons/bs";
import convertToBase64 from "../../Helpers/imageConverter";

export const DropZone = ({
  avatarInputHandler,
}: {
  avatarInputHandler: (path: string) => void;
}) => {
  const fileWhiteList = [
    "image/png",
    "image/webp",
    "image/jpeg",
    "image/jpg",
    "image/svg",
  ];
  
  
  const [cryptImage, setCryptImage] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (!fileWhiteList.includes(acceptedFiles[0].type)) {
        window.alert("file format should be png, webp, jpg, jpeg, svg");
        return;
      }

      convertToBase64(acceptedFiles[0])
        .then((base64String) => {
      
          
          const imageString = `data:${acceptedFiles[0].type};base64,${base64String}`;
          setCryptImage(imageString);
          avatarInputHandler(imageString);
        })
        .catch((error) => {
          console.error("Error converting file:", error);
        });
      
    },
    // eslint-disable-next-line
    [avatarInputHandler]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <DropZoneContainer {...getRootProps()}>
      <input {...getInputProps()} />
      {cryptImage === null ? (
        <BsPlusLg
          style={{
            color: "rgba(17, 17, 17, 0.6)",
            width: "48px",
            height: "48px",
          }}
        />
      ) : (
        <DropZoneImage src={cryptImage} alt="petImg" />
      )}
    </DropZoneContainer>
  );
};


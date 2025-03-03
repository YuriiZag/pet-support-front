import { ReactPortal, useEffect } from "react";
import { createPortal } from "react-dom";
import { Backdrop, Modal } from "./modal.styled";



interface IModalProps {
  
  children: React.ReactNode;
  toggleModal: () => void;
  modalOpenState?: boolean;
}

export const ModalWindow = ({
  children,
  toggleModal,
  modalOpenState,
}: IModalProps): ReactPortal | null => {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        toggleModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  useEffect(() => {
    if (modalOpenState) {
      document.body.style.overflow = "hidden";
      document.body.style.pointerEvents = "none";
      document.body.style.overflow = "";
      document.body.style.pointerEvents = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.pointerEvents = "";
    };
  }, [modalOpenState]);

  const onClickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target && target.children.length === 1) {
      toggleModal();
    }
  };
  const modalRoot: HTMLElement | null = document.getElementById("modal-root");
  if (!modalRoot) return null;
  

  if (modalRoot) {
    return createPortal(
      <Backdrop onClick={onClickHandle}>
        <Modal onClick={(e) => e.stopPropagation()}>{children}</Modal>
      </Backdrop>,
      modalRoot
    ) ;
  }

  return null
};


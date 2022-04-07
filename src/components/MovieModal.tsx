import React, { Dispatch, FC, MouseEvent, SetStateAction } from "react";
import { ImCross } from "react-icons/im";
import ReactDOM from "react-dom";

interface Props {
  closeShowModal: Dispatch<SetStateAction<boolean>>;
  isShowModal: boolean;
}

const MovieModal: FC<Props> = ({ closeShowModal, isShowModal, children }) => {
  const handleClose = (event: MouseEvent<HTMLDivElement>) => {
    closeShowModal(false);
  };

  if (!isShowModal) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="w-screen h-screen flex justify-center items-center fixed top-0 bg-[rgba(0,0,0,0.5)]" onClick={handleClose}>
      <div className='w-2/4' onClick={e => e.stopPropagation()}>{children}</div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default MovieModal;

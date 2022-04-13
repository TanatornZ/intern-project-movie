import React, { Dispatch, FC, MouseEvent, SetStateAction } from "react";
import { ImCross } from "react-icons/im";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

interface Props {
  closeShowModal: Dispatch<SetStateAction<boolean>>;
  isShowModal: boolean;
}

const MovieModal: FC<Props> = ({ closeShowModal, isShowModal }) => {
  const closeModal = () => {
    closeShowModal(false);
  };

 
  return (
    <div className="drop-shadow-2xl w-80">
      <Modal
        isOpen={isShowModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className=" rounded py-5 px-10 w-[600px]">
          <p className="text-[#333] text-xl font-bold mb-2">Detail</p>

          <p>
            Ajax, a twisted scientist, experiments on Wade Wilson, a mercenary,
            to cure him of cancer and give him healing powers. However, the
            experiment leaves Wade disfigured and he decides to exact revenge.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default MovieModal;

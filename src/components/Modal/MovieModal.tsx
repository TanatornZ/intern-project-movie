import React, { Dispatch, FC, MouseEvent, SetStateAction } from "react";
import { ImCross } from "react-icons/im";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { useTranslation } from "react-i18next";

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

  const {t} = useTranslation('translation')

 
  return (
    <div className="drop-shadow-2xl w-80">
      <Modal
        isOpen={isShowModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className=" rounded py-5 px-10 w-modal">
          <p className="text-slate-700 text-xl font-bold mb-2">{t('detail')}</p>

          <p>
            {t('article')}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default MovieModal;

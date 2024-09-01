import style from "./ImageModal.module.css";
import Modal from "react-modal";
export default function ImageModal({ isOpen, onRequestClose, image }) {
  console.log(image);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={style.modal}
      overlayClassName={style.overlay}
    >
      <img
        src={image.urls.regular}
        alt={image.description}
        className={style.img}
      />
    </Modal>
  );
}

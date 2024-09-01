import style from "./ImageCard.module.css";

export default function ImageCard({ image, onOpenModal }) {
  return (
    <div className={style.itemImg}>
      <img
        onClick={() => onOpenModal(image)}
        src={image.urls.small_s3}
        alt={image.description}
        className={style.galleryImg}
      />
    </div>
  );
}

import style from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, onOpenModal }) {
  return (
    <ul className={style.galleryImg}>
      {images.map((image) => (
        <li key={image.id} className={style.galleryItem}>
          <ImageCard image={image} onOpenModal={onOpenModal} />
        </li>
      ))}
    </ul>
  );
}

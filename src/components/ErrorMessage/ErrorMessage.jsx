import style from "./ErrorMessage.module.css";
export default function ErrorMessage() {
  return <p className={style.error}>Something wrong. Please try again!</p>;
}

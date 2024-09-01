import toast from "react-hot-toast";
import style from "./SearchBar.module.css";
export default function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value.trim();

    if (topic === "") {
      toast.error("Please enter a search term.", {
        duration: 1500,
      });
      return;
    }

    onSearch(topic);
    form.reset();
  };

  return (
    <header className={style.header}>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="topic"
        />
        <button type="submit" className={style.btn}>
          Search
        </button>
      </form>
    </header>
  );
}

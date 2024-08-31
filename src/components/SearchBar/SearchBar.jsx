import toast from "react-hot-toast";

export default function SearchBar({ onSearch }) {
  const handleSumbit = (event) => {
    event.oreventDefault();
    const form = event.target;
    const topic = form.elevents.topic.value.trim();

    if (topic === "") {
      toast.error("Please enter a search term!", { duration: 2000 });
      return;
    }

    onSearch(topic);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

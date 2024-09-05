// SearchForm.tsx
import { FormEvent } from "react";
import { useAppContext } from "./context";

export const SearchForm = () => {
  const { setSearchTerm } = useAppContext();

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    const searchValue = (e.target as HTMLFormElement).elements.namedItem("search") as HTMLInputElement;
    if (!searchValue || !searchValue.value) return;
    setSearchTerm(searchValue.value);
  };

  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="form-input search-input"
          id="search"
          type="text"
          name="search"
          placeholder="cat"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};

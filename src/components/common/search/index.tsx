import { Search } from "../../icons";

export const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type={"search"}
        placeholder="search recipes"
      />
      <Search />
    </div>
  );
};

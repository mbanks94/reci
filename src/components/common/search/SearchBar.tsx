// import { useState } from "react";
// import { useTheme } from "../../../contexts/theme";
import { Search } from "../../icons";

export const SearchBar = () => {
  // const { theme } = useTheme();
  // const [searchValue, setSearchValue] = useState("");

  return (
    <div className="light search-box">
      <input
        className="search-input"
        type={"search"}
        placeholder="search recipes"
      />
      <div className="search-btn">
        <Search />
      </div>
    </div>
  );
};

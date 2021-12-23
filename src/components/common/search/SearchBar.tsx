import { useContext, useState } from "react";
import { Themed } from "..";
import { ThemeContext } from "../../../contexts/theme";
import { Search } from "../../icons";

export const SearchBar = () => {
    const { state, dispatch } = useContext(ThemeContext);
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="light search-box">
            <Themed>
                <input className="search-input" type={"search"} placeholder="search recipes" />
                <div className="search-btn">
                    <Search />
                </div>
            </Themed>
        </div>
    );
};
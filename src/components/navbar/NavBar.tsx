import { Themed, ThemeToggle } from "../common";
import { SearchBar } from "../common/search/SearchBar";

export const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <Themed>
                    <div className="content">
                        <h2>Reci</h2>
                        
                        <div className="spacer" />
                        
                        <SearchBar />
                        
                        <div className="spacer" />
                        
                        <div className="themetoggle">
                            <ThemeToggle />
                        </div>
                    </div>
                </Themed>
            </div>
        </>
    );
};
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faArchive, faMoon, faSearch, faSun } from '@fortawesome/free-solid-svg-icons';

library.add(far, faArchive, faMoon, faSearch, faSun);

export { Archive } from "./Archive"
export { Moon } from "./Moon";
export { Search } from "./Search";
export { Sun } from "./Sun";
import { createContext, useReducer } from "react";
import { IContext, IProviderProps } from "..";
import { FilmAction } from "./actions";
import { filmReducer, FilmState, initialState } from "./reducer";

const FilmContext = createContext<IContext<FilmState, FilmAction>>({
    state: initialState,
    dispatch: () => null,
});

const FilmProvider = ({ children }: IProviderProps) => {
    const [state, dispatch] = useReducer(filmReducer, initialState);

    return (
        <FilmContext.Provider value={{ state, dispatch }}>
            {children}
        </FilmContext.Provider>
    )
};

export { FilmContext, FilmProvider };
export { createFilm, deleteFilm, editFilm, fetchFilm, fetchFilms } from "./actions";

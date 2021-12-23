import { IAction } from "..";
import { Film } from "../../models";

export enum FilmActionType {
    FILM_CREATED = "FILM_CREATED",
    FILM_DELETED = "FILM_DELETED",
    FILM_EDITED = "FILM_EDITED",
    FILM_FETCHED = "FILM_FETCHED",
    FILMS_FETCHED = "FILMS_FETCHED",
}

export interface FilmAction extends IAction<FilmActionType, Film> {}

export const createFilm = (film: Film, dispatch: (action: FilmAction) => void) => {
    dispatch({
        type: FilmActionType.FILM_CREATED,
        payload: film,
    });
};

export const deleteFilm = (film: Film, dispatch: (action: FilmAction) => void) => {
    dispatch({
        type: FilmActionType.FILM_DELETED,
        payload: film,
    });
};

export const editFilm = (films: Film[], dispatch: (action: FilmAction) => void) => {
    dispatch({
        type: FilmActionType.FILM_EDITED,
        payload: films,
    });
};

export const fetchFilm = (film: Film, dispatch: (action: FilmAction) => void) => {
    dispatch({
        type: FilmActionType.FILM_FETCHED,
        payload: film,
    });
};

export const fetchFilms = (films: Film[], dispatch: (action: FilmAction) => void) => {
    dispatch({
        type: FilmActionType.FILMS_FETCHED,
        payload: films,
    });
};

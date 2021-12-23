import { replaceInCollection } from "../../helpers";
import { Film } from "../../models"
import { FilmAction, FilmActionType } from "./actions";

export interface FilmState {
    film?: Film;
    films: Film[];
}

export const initialState: FilmState = {
    film: undefined,
    films: [],
};

export const filmReducer = (state: FilmState, action: FilmAction) => {
    const { type, payload } = action;
    switch (type) {
        case FilmActionType.FILM_CREATED:
            return {
                ...state,
                film: payload as Film,
                films: [...state.films, payload as Film],
            };
        case FilmActionType.FILM_DELETED:
            return {
                ...state,
                film: undefined,
                films: [...state.films.filter(({ id }) => id !== (payload as Film).id)]
            };
        case FilmActionType.FILM_EDITED:
            return {
                ...state,
                film: (payload as Film[])[1],
                films: replaceInCollection(
                    state.films,
                    (payload as Film[])[0],
                    (payload as Film[])[1],
                    (a, b) => a.title.localeCompare(b.title)
                ),
            };
        case FilmActionType.FILM_FETCHED:
            return {
                ...state,
                film: payload as Film,
            };
        case FilmActionType.FILMS_FETCHED:
            return {
                ...state,
                films: payload as Film[],
            };
        default:
            return state;
    }
};


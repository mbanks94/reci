import { useContext, useEffect } from "react";
import { FilmContext, createFilm, fetchFilms } from "../../contexts/films";
import { useDataFetch } from "../../hooks/useDataFetch";
import { Film } from "../../models";
import { AddButton, ListView } from "../common";

export const Films = () => {
    const { state, dispatch } = useContext(FilmContext);
    const [fetchState, setUrl] = useDataFetch<Film[]>([]);

    useEffect(() => {
        if (state.films &&
            state.films.length === 0) {
            setUrl("https://ghibliapi.herokuapp.com/films")
        }
    }, [state, setUrl])

    useEffect(() => {
        fetchFilms(fetchState.data!, dispatch)
    }, [fetchState.data, dispatch])

    const addFilm = () => {
        const film: Film = {
            id: "test",
            url: "test",
            title: "test",
            original_title: "test",
            original_title_romanised: "test",
            description: "test",
            director: "test",
            producer: "test",
            release_date: "test",
            running_time: "test",
            rt_score: "test",
            people: ["test"],
            species: ["test"],
            locations: ["test"],
            vehicles: ["test"],
        };
        createFilm(film, dispatch);
    }

    return (
        <>
            <ListView
                title={"Films"}
                isError={fetchState.isError}
                isLoading={fetchState.isLoading}
                ActionButton={() => <AddButton text={"+"} onClick={() => addFilm()} />}
            >
                <>
                    {!!state.films && state.films.map((film: Film, i) => (
                        <div key={`${i}-${film.id}`} className={"film-card"}>
                            <p className={"film-title"}>{film.title} ({film.release_date})</p>
                            <p>{film.running_time} min</p>
                            <p>Directed by {film.director}</p>
                        </div>
                    ))}
                </>
            </ListView>
        </>
    );
};
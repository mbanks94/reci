import { Film } from "../../models/Film";

interface FilmDetailProps {
    film: Film;
}

export const FilmDetail = (props: FilmDetailProps) => {
    return (
        <h5>{props.film.title}</h5>
    )
};
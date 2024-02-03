import Moviedesc from "../movie-card/movie_desc";
import { movie } from "../types/type";

interface ListaDescProps {
  movies: movie[];
}

export const ListaDesc = ({ movies }: ListaDescProps) => {
  return (
    <div>
      <ul>
        {movies.map((singleMovie) => (
          <Moviedesc key={singleMovie.imdbID} moviede={singleMovie} />
        ))}
      </ul>
    </div>
  );
};

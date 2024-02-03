import { SimpleGrid } from "@chakra-ui/react";
import { MovieCard } from "../movie-card/movie_card";
import { movie } from "../types/type";

 export interface movielistprops {
  listmovie: movie[];
}
export const ListaMovie = ({ listmovie }: movielistprops) => {
  return (
    <div>
      <ul>
        <SimpleGrid columns={3} spacing={10}>
          {listmovie.map((movie) => (
            <MovieCard key={movie.imdbID} movied={movie} />
            
          ))}
        </SimpleGrid>
      </ul>
    </div>
  );
};

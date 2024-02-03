import { useLoaderData } from "react-router-dom";
import GetMovies from "../imdb/getMovies";
import { movie } from "../types/type";
import { ListaMovie } from "../listaMovie/listaMovie";


export async function moviesLoader() {
  const movies = await GetMovies();
  
  return movies.Search;
}
export default function Elenco_movie() {
  const movieapi = useLoaderData() as movie[];
  return (
    <div>
      <ListaMovie listmovie={movieapi} />
      
    </div>
  );
}

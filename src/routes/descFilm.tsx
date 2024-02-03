import { LoaderFunction, useLoaderData } from "react-router-dom";
import { getDetailMovie } from "../imdb/getDetailMovie";
import { movie } from "../types/type";

import { Header } from "./header";
import { ListaDesc } from "../listaMovie/ListaDesc";



export const Moviedescr: LoaderFunction = async ({ params }) => {
    const {id} = params;

  const movie = await getDetailMovie(id);
  return movie;
}
function DescFilm ()  {
    const movie = useLoaderData() as movie;
    return (
        <div>
            <Header />
            <ListaDesc movies={[movie]} />
        </div>
    )

}

export default DescFilm;
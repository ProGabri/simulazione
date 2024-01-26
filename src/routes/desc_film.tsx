import { getDetailMovie } from "../imdb/getDetailMovie";
export async function moviesdesc(): Promise<any> {
  const moviesdesc = await getDetailMovie();
  return moviesdesc.Search;
}
export default function desc_film() {}

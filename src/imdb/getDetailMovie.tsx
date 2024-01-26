import axios from "axios";

export async function getDetailMovie(id: string) {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=a59763&i=${id}`
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

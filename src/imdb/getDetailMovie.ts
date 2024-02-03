import axios from "axios";

export async function getDetailMovie(id:any) {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=a59763&i=${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

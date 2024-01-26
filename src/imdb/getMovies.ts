import axios from "axios";

async function getMovies() {
  try {
    const response = await axios.get(
      "http://www.omdbapi.com/?apikey=a59763&s=fast and furious"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

export default getMovies;

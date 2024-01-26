import axios from "axios";
export function GetMovies() {
  axios
    .get("http://www.omdbapi.com/?apikey=a59763&s=star wars")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  // code here
  return <div>GetMovies</div>;
}

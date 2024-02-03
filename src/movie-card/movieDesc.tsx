
import { movie } from '../types/type';


interface moviecardprops {
    moviede: movie;
  }
  

function Moviedesc ({moviede}:moviecardprops)  {
    return (
        <div className="movie-card">
            
            <p>{moviede.Plot}</p>
            <p>{moviede.Director}</p>
            <p>{moviede.Actors}</p>
            <p>{moviede.Genre}</p>
            <p>{moviede.imdbRating}</p>
        </div>
    );
};

export default Moviedesc;

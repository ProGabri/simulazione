
import { movie } from '../types/type';


interface moviecardprops {
    moviede: movie;
  }
  

function Moviedesc ({moviede}:moviecardprops)  {
    return (
        <div className="movie-card">
            <h1>{moviede.Title}</h1>
            <p>{moviede.Plot}</p>
        </div>
    );
};

export default Moviedesc;

import React from "react";
import { modedesc } from "../types/type";

interface ListaDescProps {
  movies: modedesc[];
}

const ListaDesc: React.FC<ListaDescProps> = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDesc;

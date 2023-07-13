import { useState, useEffect } from "react";

/* funcion para llamar de una api datos de peliculas */
export default function ApiMovies({ urlApiMovie }) {
  // recibe nombre o parentezco de la pelicula
  const [dataMovies, setDataMovies] = useState([]); // array que guarda toda la lista de las peliculas que se le asigne
  const [dataBoolean, setDataBoolean] = useState(false); // si no encuentra el nombre seria falso

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${urlApiMovie}`) // link de la api + nombre de la pelicula que se asigne
      .then((result) => result.json())
      .then((data) => {
        setDataMovies(data.Search);
        setDataBoolean(data.Response === "True"); // tanto el (data.search) como el (data.response) deben de coincidir para que la condicion se de.
      })
      .catch((error) => {
        console.log("Error:", error); // si no se cumple la anterior condicion pasaria a esta la del error
      });
  }, [urlApiMovie]);

  return (
    <>
      {/* se retorna operador ternario donde si la condicion se cumple trae datos de la pelicula si no lo que esta dentro de la etiqueta <P/> */}
      {dataBoolean ? (
        <ul>
          {dataMovies.map((movie, index) => (
            <li key={index}>
              <h2>{movie.Title}</h2>
              <img src={movie.Poster} alt={movie.imdbID} />
              <h3>{movie.Year}</h3>
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron archivos</p>
      )}
    </>
  );
}

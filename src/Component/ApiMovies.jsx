import { useState, useEffect } from "react";

export default function ApiMovies({ urlApiMovie }) {
  const [dataMovies, setDataMovies] = useState([]);
  const [dataBoolean, setDataBoolean] = useState(false);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${urlApiMovie}`)
      .then((result) => result.json())
      .then((data) => {
        setDataMovies(data.Search);
        setDataBoolean(data.Response === "True");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [urlApiMovie]);

  return (
    <>
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

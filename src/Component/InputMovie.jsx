import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ApiMovies from "./ApiMovies";

export default function InputMovie() {
  const [searchText, setSearchText] = useState("");
  const [returnMovie, setReturnMovie] = useState(null);

  const handleSearch = (event) => {
    event.preventDefault();
    setReturnMovie(<ApiMovies urlApiMovie={searchText} dataBoolean />);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar Películas..."
          value={searchText}
          onChange={handleInputChange}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
      {returnMovie}
    </>
  );
}

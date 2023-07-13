import "./App.css";
import ApiMovies from "./Component/ApiMovies";
import InputMovie from "./Component/InputMovie";
import NameApp from "./Component/NameApp";

function App() {
  return (
    <>
      <div className="container">
        <header>
          <NameApp name1="Pelis" name2="Piratas" />
          <div>
            <InputMovie />
          </div>
        </header>
        <main></main>
      </div>
    </>
  );
}

export default App;

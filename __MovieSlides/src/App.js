//Data
import { MoviesData } from './Data/MoviesData';

//components
import Navbar from './Components/Navbar';
import MovieList from './Components/MovieList';

function App() {
  const handleCallback = (movie) => {
    movie !== null && alert(movie);
  };
  return (
    <div className="App">
      <Navbar movies={MoviesData} parentCallback={handleCallback} />
      <MovieList movies={MoviesData} />
    </div>
  );
}

export default App;

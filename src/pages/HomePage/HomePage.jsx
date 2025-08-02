import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/tmdbApi';
import MovieList from '../../components/MovieList/MovieList';
import styles from './HomePage.module.css';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Trending Movies</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}

export default HomePage;
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/tmdbApi';
import styles from './MovieCast.module.css';

const DEFAULT_PHOTO = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  if (!cast.length) return <p>No cast info available.</p>;

  return (
    <ul className={styles.list}>
      {cast.map(actor => (
        <li key={actor.cast_id} className={styles.item}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : DEFAULT_PHOTO
            }
            alt={actor.name}
            className={styles.photo}
          />
          <p>{actor.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;
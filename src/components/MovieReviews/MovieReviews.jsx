import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/tmdbApi';
import styles from './MovieReviews.module.css';

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews.length) return <p>No reviews found.</p>;

  return (
    <ul className={styles.list}>
      {reviews.map(review => (
        <li key={review.id}>
          <p><strong>{review.author}</strong>: {review.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieReviews;
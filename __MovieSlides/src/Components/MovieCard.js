//styling
import './MovieCard.css';
//mui rating
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
const MovieCard = ({ movie }) => {
  const rating = movie.rating;

  return (
    <div className="movie-card">
      <div className="movie_info_wrapper">
        <h1 className="info movie__title">{movie.name}</h1>
        <h1 className="info movie__date">{movie.date}</h1>
        <h1 className="info movie__rating">
          <Rating
            name="text-feedback"
            value={rating}
            readOnly
            precision={0.25}
            emptyIcon={
              <StarIcon style={{ opacity: 0.75 }} fontSize="inherit" />
            }
          />
        </h1>

        <h3 className="info movie__description">{movie.description}</h3>
      </div>
      <div className="movie_image">
        <img src={movie.image} alt={movie.name} />
      </div>
    </div>
  );
};

export default MovieCard;

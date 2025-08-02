import axios from 'axios';

const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjcwNTA2ZWNhMDE3ZWRlNDdmOTYzNTNiMzUyNTQzYyIsIm5iZiI6MTc0OTkyNDMzMi41Mzc5OTk5LCJzdWIiOiI2ODRkYjllY2JjYTE0NDI5ZDViMGRmNjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.BUjcSLzv2qDznT8jm4bzgbCEvGjbl1hd-y2bPWcbBW0'; 

const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization: API_KEY,
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return response.data.results;
};

export const searchMovies = async query => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&language=en-US&page=1&include_adult=false`,
    options
  );
  return response.data.results;
};

export const getMovieDetails = async id => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, options);
  return response.data;
};

export const getMovieCast = async id => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/credits`, options);
  return response.data.cast;
};

export const getMovieReviews = async id => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/reviews`, options);
  return response.data.results;
};
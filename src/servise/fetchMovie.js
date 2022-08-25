import toast from 'react-hot-toast';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f03c7748b719b9d3d199626266460850';

export const fetchPopular = async () => {
  try {
    const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error, 'fetchPopular');
  }
};

export const fetchByQuery = async searchQuery => {
  try {
    const url = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&include_adult=false`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchById = async movieId => {
  try {
    const url = `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    toast.error('congratulations. fatal error');
    console.log(error);
  }
};

export const fetchCredits = async movieId => {
  try {
    const url = `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    toast.error('congratulations. fatal error');
    console.log(error);
  }
};

export const fetchReviews = async movieId => {
  try {
    const url = `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    toast.error('congratulations. fatal error');
    console.log(error);
  }
};

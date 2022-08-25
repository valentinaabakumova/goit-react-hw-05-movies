import React, { useEffect, useState } from 'react';
import { Searchbar } from '../components/Searchbar';
import { MovieList } from 'components/MovieList';
import { fetchByQuery } from 'servise/fetchMovie';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader';
import styled from 'styled-components';
import { toast } from 'react-hot-toast';

const Movies = () => {
  const [queryList, setQueryList] = useState([]);
  const [loaderActive, setLoaderActive] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(location);
  const query = searchParams.get('search') ?? '';

  const handleFormSubmit = query => {
    if (query.trim() === '') {
      toast.error('empty');
      setQueryList([]);
      setSearchParams({});
      return;
    }
    setSearchParams({ search: query });
  };

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setLoaderActive(true);
        const searchResult = await fetchByQuery(query);
        if (searchResult.length === 0) {
          toast.error(`come on.. type something normal !`);
          setQueryList([]);
        }
        setQueryList([...searchResult]);
      } catch (error) {
      } finally {
        setLoaderActive(false);
      }
    };
    getData();
  }, [query]);
  return (
    <MyList>
      <Searchbar onSubmit={handleFormSubmit} />
      {loaderActive && <Loader />}
      {queryList.length > 0 && (
        <>
          <h2>movie list</h2>
          <MovieList moviesArray={queryList} location={location} />
        </>
      )}
    </MyList>
  );
};

export default Movies;

const MyList = styled.main`
  margin: auto;
  padding-top: 80px;
  padding-bottom: 10px;
  width: 1200px;

  min-height: 100vh;
  text-align: center;
`;

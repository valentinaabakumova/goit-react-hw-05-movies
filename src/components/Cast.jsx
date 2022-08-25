import { fetchCredits } from 'servise/fetchMovie';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loaderActive, setLoaderActive] = useState(false);
  const { movieId } = useParams();

  console.log(movieId);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoaderActive(true);
        const data = await fetchCredits(movieId);
        const actors = data.cast;
        setCast(actors);
      } catch (error) {
      } finally {
        setLoaderActive(false);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <MyTitle>cast:</MyTitle>
      {loaderActive && <Loader />}
      {cast ? (
        <MyList>
          {cast.map(({ id, name, character, profile_path }) => (
            <MyItem key={id}>
              {profile_path ? (
                <img
                  loading="lazy"
                  src={'https://image.tmdb.org/t/p/w500' + profile_path}
                  alt={name}
                  width={`100px`}
                />
              ) : (
                <SpyImage
                  src="https://www.pequotlibrary.org/wp-content/uploads/2021/08/1085386-200.png"
                  width={`100px`}
                />
              )}
              <h3>{name}</h3>
              <p>{character}</p>
            </MyItem>
          ))}
        </MyList>
      ) : (
        <p>no info</p>
      )}
    </div>
  );
};

const SpyImage = styled.img`
  margin-top: 20px;
  margin-bottom: 25px;
`;

const MyTitle = styled.h2`
  margin: 0 0 0 30px;
  font-family: monospace;
  font-size: 25px;
`;
const MyList = styled.ul`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  margin: 0;
  font-family: monospace;
`;
const MyItem = styled.li`
  text-align: center;
  list-style: none;
  margin: 15px 15px;
  padding: 10px 10px;
  width: 100px;
  font-family: monospace;

  & h3 {
    margin: 10px 0;
  }
  & p {
    margin-bottom: 10px;
  }
`;

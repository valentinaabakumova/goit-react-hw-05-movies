import {
  useParams,
  NavLink,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { fetchById } from 'servise/fetchMovie';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const MovieInfo = () => {
  const { movieId } = useParams();
  const [item, setItem] = useState(null);

  const location = useLocation();
  useEffect(() => {
    const getData = async () => {
      try {
        const movie = await fetchById(movieId);
        setItem(movie);
      } catch (error) {
        console.log('ffff');
      } finally {
      }
    };
    getData();
  }, [movieId]);
  if (!item) {
    return;
  }
  const { original_title, overview, vote_average, poster_path, genres } = item;
  console.log(genres);
  const genresStr = genres.reduce((str, genre) => {
    return str + `${genre.name}, `;
  }, '');
  const genresStrFinal = genresStr.slice(0, genresStr.length - 2);
  return (
    <>
      {item && (
        <MyMain>
          <MyMovieCard>
            <Link to={location.state?.from ?? '/'}>
              {' '}
              <Back> {'<-- back'} </Back>
            </Link>
            {/* <InfoTitle>info:</InfoTitle> */}
            <MyContent>
              <Image
                src={'https://image.tmdb.org/t/p/w500' + poster_path}
                alt={original_title}
                width={`200px`}
              />
              <MyText>
                <Title>{original_title}</Title>
                <p>{overview}</p>
                <MyTitle>
                  {' '}
                  <Span>raiting: </Span> {vote_average}
                </MyTitle>
                <MyTitle>
                  <Span>genres: </Span>
                  {genresStrFinal}
                </MyTitle>
              </MyText>
            </MyContent>
          </MyMovieCard>
          <Ul>
            <Links>
              <MyLink to="cast">cast</MyLink>
            </Links>
            <Links>
              <MyLink to="reviews">reviews</MyLink>
            </Links>
          </Ul>
          <Outlet />
        </MyMain>
      )}
    </>
  );
};

// const InfoTitle = styled.h2`
//   margin-right: 20px;
//   display: flex;
//   justify-content: start;
//   margin-top: 40px;
//   margin-bottom: 50px;
// `;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const Image = styled.img`
  margin-right: 40px;
`;

const Span = styled.span`
  font-weight: bold;
`;

const Back = styled.span`
  font-size: 20px;
  display: flex;
  justify-content: start;
  margin-bottom: 50px;
  text-decoration: none;
  text-decoration: none;
`;

const Title = styled.li`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const MyTitle = styled.li`
  font-size: 22px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Links = styled.li`
  font-size: 25px;
  list-style: none;
  text-decoration: none;
  color: #ffffff;
  margin-bottom: 10px;
  margin-right: 70px;
`;

const MyMain = styled.main`
  margin: auto;
  padding-top: 80px;
  padding-bottom: 10px;
  width: 1200px;
  min-height: 100vh;
  margin-bottom: 20px;
`;

const MyMovieCard = styled.div`
  padding: 10px;
  text-align: center;
  margin-bottom: 20px;
`;

const MyContent = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const MyText = styled.div`
  text-align: left;
  padding-left: 10px;
  margin-bottom: 20px;

  & p {
    font-size: 20px;
    padding: 10px;
  }

  & h3 {
    padding-left: 30px;
  }
`;

const MyLink = styled(NavLink)`
  text-decoration: none;
  &.active {
    color: ${p => `#2C888B`};

    text-decoration: underline;
  }
`;

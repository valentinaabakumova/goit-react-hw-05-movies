import { fetchReviews } from 'servise/fetchMovie';
import styled from 'styled-components';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loaderActive, setLoaderActive] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoaderActive(true);
        const data = await fetchReviews(movieId);
        const content = data.results;

        setReviews(content);
      } catch (error) {
      } finally {
        setLoaderActive(false);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <MyTitle>reviews:</MyTitle>
      {loaderActive && <Loader />}
      {reviews.length > 0 ? (
        <MyList>
          {reviews.map(({ id, author, content }) => (
            <MyItem key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </MyItem>
          ))}
        </MyList>
      ) : (
        <MyInfo>no comments</MyInfo>
      )}
    </div>
  );
};

const MyTitle = styled.h2`
  margin: 0 0 0 30px;
  font-size: 25px;
`;
const MyList = styled.ul`
  padding: 10px;
  margin: 0;
`;

const MyItem = styled.li`
  list-style: none;
  margin: 0 30px;
  font-family: monospace;

  & h3 {
    margin: 10px 0;
  }
  & p {
    margin-bottom: 30px;
  }
`;

const MyInfo = styled.p`
  margin-left: 30px;
  font-size: 20px;
  font-family: monospace;
  margin-top: 10px;
`;

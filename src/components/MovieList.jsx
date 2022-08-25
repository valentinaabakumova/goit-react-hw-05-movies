import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { React } from 'react';
import PropTypes from 'prop-types';

export const MovieList = ({ moviesArray, location }) => {
  return (
    <ul>
      {moviesArray.map(({ id, title }) => (
        <MyList key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <p>{title}</p>
          </Link>
        </MyList>
      ))}
    </ul>
  );
};

const MyList = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-size: 20px;
  color: green;
  text-shadow: 4px 2px 4px #e9f999;
  font-family: monospace;
`;

MovieList.propTypes = {
  moviesArray: PropTypes.array,
  location: PropTypes.object,
};

import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export function Loader() {
  return (
    <Wrapp>
      <InfinitySpin width="200" color="#2C888B" />;
    </Wrapp>
  );
}

const Wrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Loader.propTypes = {
  query: PropTypes.string,
};

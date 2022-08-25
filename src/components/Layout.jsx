import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from 'styled-components';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <>
      <Wrap>
        <MyHeader>
          <nav>
            <MyLink to="/">home</MyLink>
            <MyLink to="/movies">movies</MyLink>
          </nav>
        </MyHeader>
      </Wrap>

      <Suspense>
        <Outlet />
      </Suspense>

      <Toaster />
    </>
  );
};
const Wrap = styled.div`
  position: relative;
  margin: auto;
  width: 1200px;
`;

const MyHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
  height: 80px;

  background-color: rgba(12, 12, 12, 0.328);
  font-family: monospace;
`;
const MyLink = styled(NavLink)`
  font-size: 30px;
  font-weight: 700;
  padding: ${p => 20}px;
  color: ${p => `#999B9B`};
  text-decoration: none;
  &.active {
    color: ${p => `#2C888B`};
  }
  font-family: monospace;
`;

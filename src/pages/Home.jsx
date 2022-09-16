import React from 'react';
import Lists from '../components/Lists';
import Form from '../components/Form';
import styled from 'styled-components';

const Home = () => {
  return (
    <div>
      <Main>
        <Lists />
        <Form />
      </Main>
    </div>
  );
};

export default Home;

const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 10vh;
  width: 50%;
  margin: 0 auto;
`;
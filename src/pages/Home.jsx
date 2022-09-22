import React from 'react';
import List from '../components/List';
import Form from '../components/Form';
import styled from 'styled-components';
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollection } from '../hooks/useCollection';

const Home = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection('transactions');

  console.log(documents);

  return (
    <div>
      <Main>
        {error && <p>{error}</p>}
        <Lists>
          {documents.map((doc) => (
            <List key={doc.id} {...doc} />
          ))}
        </Lists>
        <Form uid={user.uid} />
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

const Lists = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

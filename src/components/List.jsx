import React from 'react';
import styled from 'styled-components';

const List = () => {
  return (
    <Wrapper>
      <Button>x</Button>
      <h3>Mushroom</h3>
      <h3>$20</h3>
    </Wrapper>
  );
};

export default List;

const Wrapper = styled.div`
  border: 1px solid black;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20rem;
  margin: 20px;
`;

const Button = styled.button`
  background-color: #999;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

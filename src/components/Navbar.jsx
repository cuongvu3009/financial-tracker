import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Wrapper>
      <Link to='/' className='styledLink'>
        <h2>myMoney</h2>
      </Link>
      <Right>
        <h4>Name</h4>
        <Link to='/signin' className='styledLink'>
          <Button>Log In</Button>
        </Link>
      </Right>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  height: 50px;
  background-color: greenyellow;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Button = styled.button`
  padding: 5px;
  cursor: pointer;
`;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <Wrapper>
      <Link to='/' className='styledLink'>
        <h2>myMoney</h2>
      </Link>
      <Right>
        {user && (
          <>
            <h4>{user?.displayName.toUpperCase()}</h4>
            <Link onClick={logout} className='styledLink'>
              <Button>Log Out</Button>
            </Link>
          </>
        )}

        {!user && (
          <>
            <Link to='/signin' className='styledLink'>
              <Button>Log In</Button>
            </Link>
            <Link to='/signup' className='styledLink'>
              <Button>Sign Up</Button>
            </Link>
          </>
        )}
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

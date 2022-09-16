import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useSignin';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isPending, error } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    setEmail('');
    setPassword('');

    navigate('/');
    console.log('Sign In succesfully!');
  };
  return (
    <Wrapper>
      <h2>Login</h2>
      {error && <p>{error}</p>}

      <Form>
        <label htmlFor=''>Email:</label>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor=''>Password:</label>
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {!isPending && <Button onClick={handleSubmit}>Login</Button>}
        {isPending && <Button disabled>Loading...</Button>}
      </Form>
      <p>
        Not a member yet? <Link to='/signup'>Sign Up</Link>
      </p>
    </Wrapper>
  );
};

export default SignIn;

const Wrapper = styled.div`
  height: 80vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Form = styled.form`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
`;

const Button = styled.button``;

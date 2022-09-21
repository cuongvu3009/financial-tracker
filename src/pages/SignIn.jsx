import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSignin } from '../hooks/useSignin';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const { signin, error, isPending } = useSignin();
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!error && email && password) {
      signin(email, password);
      dispatch({ type: 'LOGIN' });
      setEmail('');
      setPassword('');
      setSuccess(true);
      navigate('/');
    }
  };

  return (
    <Wrapper>
      <h2>Login</h2>

      <Form onSubmit={handleLogin}>
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
        {!isPending && <Button type='submit'>Login</Button>}
        {isPending && <Button disabled>Loading...</Button>}
      </Form>
      {error && <Error>{error}</Error>}
      {success && <Success>Login successfully!</Success>}
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

const Error = styled.p`
  color: white;
  background-color: red;
  padding: 10px;
`;

const Success = styled.p`
  color: white;
  background-color: green;
  padding: 10px;
`;

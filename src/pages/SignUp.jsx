import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSignup } from '../hooks/useSignup';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState('');
  const [displayName, setDisplayName] = useState('');
  const { error, isPending, signup } = useSignup();

  const handleSignup = (e) => {
    e.preventDefault();

    if (name && email && password) {
      signup(email, password, displayName);
      setName('');
      setEmail('');
      setPassword('');
      setAlert('Registered successful !');
    } else {
      setAlert('Please provide name, email and password!');
    }
  };

  return (
    <Wrapper>
      <h2>Register</h2>
      {error ? (
        <span>{error && <Alert>{error}</Alert>}</span>
      ) : (
        <span>{alert && <Alert>{alert}</Alert>}</span>
      )}

      <Form>
        <label htmlFor=''>Name:</label>
        <input
          type='text'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
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
        {!isPending && <Button onClick={handleSignup}>Sign Up</Button>}
        {isPending && <Button disabled>Loading...</Button>}
      </Form>

      <p>
        Already a member? <Link to='/signin'>Sign In</Link>
      </p>
    </Wrapper>
  );
};

export default SignUp;

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

const Alert = styled.p`
  font-weight: bold;
`;

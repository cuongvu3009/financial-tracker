import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSignup } from '../hooks/useSignup';
import { useAuthContext } from '../hooks/useAuthContext';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const { error, isPending, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!error && email && password && name) {
      signup(email, password, name);
      setName('');
      setEmail('');
      setPassword('');
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };

  return (
    <Wrapper>
      <h2>Register</h2>
      <Form onSubmit={handleSubmit}>
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
        {isPending && <Button disabled>Loading...</Button>}
        {!isPending && <Button type='submit'>Sign Up</Button>}
      </Form>
      {success && <Success>Signup successfully!</Success>}
      {error && <Error>{error}</Error>}
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

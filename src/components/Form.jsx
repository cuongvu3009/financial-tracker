import React, { useState } from 'react';
import styled from 'styled-components';
import { useFirestore } from '../hooks/useFirestore';

const Form = ({ uid }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const { addDocument } = useFirestore('transactions');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({ uid, name, amount });
    setName('');
    setAmount('');
  };

  return (
    <div>
      <h2>Add transaction</h2>
      <FormContainer onSubmit={handleSubmit}>
        <label htmlFor=''>Transaction name:</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor=''>Amount ($):</label>
        <input
          type='number'
          value={amount}
          required
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type='submit'>Add transaction</button>
      </FormContainer>
    </div>
  );
};

export default Form;

const FormContainer = styled.form`
  padding: 20px;
  background-color: green;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

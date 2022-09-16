import React from 'react';
import styled from 'styled-components';

const Form = () => {
  return (
    <div>
      <h2>Add transaction</h2>
      <FormContainer action=''>
        <label htmlFor=''>Transaction name:</label>
        <input type='text' />
        <label htmlFor=''>Amount ($):</label>
        <input type='number' />
        <button>Add transaction</button>
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

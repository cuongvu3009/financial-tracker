import { useState, useEffect } from 'react';
import { useAuthContext } from './useAuthContext';
import { projectAuth } from '../firebaseConfig';

export const useSignin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const { dispatch } = useAuthContext();

  const signin = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);
      console.log(res.user);
      await dispatch({ type: 'LOGIN' });
      setError(null);
      setIsPending(false);
    } catch (error) {
      setError(error.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signin };
};

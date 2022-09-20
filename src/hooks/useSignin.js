import { useState, useEffect } from 'react';
import { useAuthContext } from './useAuthContext';
import { projectAuth } from '../firebaseConfig';

export const useSignin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signin = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      //	login
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      //	dispatch login action
      await dispatch({ type: 'LOGIN', payload: res.user });
      setError(null);
      setIsPending(false);
    } catch (error) {
      setError(error.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signin };
};

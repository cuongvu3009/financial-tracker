import { useState, useEffect } from 'react';
import { projectAuth } from '../firebaseConfig';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, name) => {
    setError(null);
    setIsPending(true);
    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password,
        name
      );

      if (!res) {
        throw new Error('Could not signup!');
      }

      //	add name to user
      await res.user.updateProfile({ displayName: name });

      //	dispatch login action
      await dispatch({ type: 'LOGIN', payload: res.user });

      setIsPending(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};

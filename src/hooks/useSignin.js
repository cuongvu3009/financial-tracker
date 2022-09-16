import { useState, useEffect } from 'react';
import { projectAuth } from '../firebaseConfig';

export const useLogin = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [isCancelled, setIsCancelled] = useState(false);

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      if (!res) {
        throw new Error('Could not complete signin!');
      }
      if (!isCancelled) {
        setError(null);
        setIsPending(false);
      }
      console.log(res);
    } catch (error) {
      if (!isCancelled) {
        setError(error.message);
        setIsPending(false);
      }
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { login, isPending, error };
};

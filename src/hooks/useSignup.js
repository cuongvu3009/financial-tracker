import { useState } from 'react';
import { projectAuth } from '../firebaseConfig';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (email, password, displayname) => {
    setError(null);
    setIsPending(true);

    try {
      //	signup user
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(res.user);

      if (!res) {
        throw new Error('Could not complete signup!');
      }

      //	add display name to user
      await res.user.updateProfile({ displayname });

      setIsPending(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};

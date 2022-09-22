import { useEffect, useState } from 'react';
import { projectFirestore } from '../firebaseConfig';

export const useCollection = (collection) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ref = projectFirestore.collection(collection);

    const unsubcribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data, id: doc.id });
        });

        //	update state
        setDocument(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError('could not fetch data');
      }
    );

    //	 unsubscribe on unmount
    return () => unsubcribe();
  }, [collection]);

  return { document, error };
};

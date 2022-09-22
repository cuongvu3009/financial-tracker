import { useEffect, useRef, useState } from 'react';
import { projectFirestore } from '../firebaseConfig';

export const useCollection = (collection, _query) => {
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState(null);

  //	to prevent infinitely loop, so we need useRef. _query is an array and is 'different' on every function call
  const query = useRef(_query).current;

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

    if (query) {
      ref = ref.where(...query);
    }

    const unsubcribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        //	update state
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError('could not fetch data');
      }
    );

    //	 unsubscribe on unmount
    return () => unsubcribe();
  }, [collection, query]);

  return { documents, error };
};

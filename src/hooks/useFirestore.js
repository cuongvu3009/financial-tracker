import { useState, useEffect, useReducer } from 'react';
import { projectFirestore } from '../firebaseConfig';

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { ...state, isPending: true };
    case 'ADDED_DOCUMENT':
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case 'ERROR':
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [cancelled, setIsCancelled] = useState(false);

  //	document ref
  const ref = projectFirestore.collection(collection);

  //	dispatch if not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  //	add document
  const addDocument = async (doc) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      const addedDocument = ref.add(doc);
      dispatchIfNotCancelled({
        type: 'ADDED_DOCUMENT',
        payload: addedDocument,
      });
    } catch (error) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: error.message });
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, response, dispatch };
};

import React, { useEffect, useState } from 'react';
import { projectFirestore } from '../firebaseConfig';
import List from './List';

const Lists = () => {
  const [data, setData] = useState(null);

  return (
    <div>
      <List></List>
    </div>
  );
};

export default Lists;

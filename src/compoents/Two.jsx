import React, { useContext } from 'react';
import { userContext } from '../context/userContext';

function Two() {
  const { data } = useContext(userContext);

  return <div>{data}</div>;
}

export default Two;

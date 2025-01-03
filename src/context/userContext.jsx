import React, { useState, createContext } from 'react';

// Create context
export const userContext = createContext(null);

function ContextProvider(props) {
  const [data, setData] = useState('Hello World');

  return (
    <userContext.Provider value={{ data, setData }}>
      {props.children}
    </userContext.Provider>
  );
}

export default ContextProvider;

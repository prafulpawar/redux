import React from 'react';
import One from './components/One';
import Two from './components/Two';
import ContextProvider from './context/userContext';

function App() {
  return (
    <ContextProvider>
      <One />
      <Two />
    </ContextProvider>
  );
}

export default App;

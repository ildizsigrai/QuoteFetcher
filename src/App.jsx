import './App.css';
import React, { useState } from 'react'; 
import QuoteFetcher from './QuoteFetcher';
import QuoteLoader from './QuoteLoader';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QuoteLoader/>
    </>
  )
}

export default App

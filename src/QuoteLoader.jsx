import React, { useEffect, useState } from "react";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function App() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [isLoading, setIsLoading] = useState(false);

  async function fetchAndSetQuote() {
    setIsLoading(true);
    const response = await fetch(RANDOM_QUOTE_URL);
    const jsonResponse = await response.json();
    const randomQuote = jsonResponse.quote;
    setQuote(randomQuote);
    setIsLoading(false);
  }

  return (
    <div>
      <button onClick={fetchAndSetQuote} className="quote-button">
        Get Quote
      </button>
      <p className="Loader" style={{ opacity: isLoading ? 1 : 0 }}>
        {isLoading ? "Loading..." : ""}
      </p>
      <h1>{quote.text}</h1>
      <h2>{quote.author}</h2>
    </div>
  );
}

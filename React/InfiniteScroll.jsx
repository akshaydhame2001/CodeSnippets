// src/InfiniteScroll.js
import React, { useState, useEffect } from "react";

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchMoreItems = () => {
    setIsFetching(true);
    setTimeout(() => {
      const newItems = Array.from(
        { length: 10 },
        (_, i) => `Item ${items.length + i + 1}`
      );
      setItems((prevItems) => [...prevItems, ...newItems]);
      setIsFetching(false);
    }, 500);
  };

  useEffect(() => {
    fetchMoreItems();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    ) {
      return;
    }
    fetchMoreItems();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFetching]);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            className="list-item"
            style={{ padding: "20px", borderBottom: "1px solid #ddd" }}
          >
            {item}
          </li>
        ))}
      </ul>
      {isFetching && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;


// src/App.js
import React from 'react';
import InfiniteScroll from './InfiniteScroll';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Infinite Scroll Example</h1>
            <InfiniteScroll />
        </div>
    );
}

export default App;


/* src/App.css */
.App {
    font-family: Arial, sans-serif;
}

.list-item {
    padding: 20px;
    border-bottom: 1px solid #ddd;
}

ul {
    list-style-type: none;
    padding: 0;
}

.loading {
    text-align: center;
    padding: 20px;
}

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [resource, setResource] = useState('posts');
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${resource}?_limit=10`
      );
      const data = await response.json();
      setApiData(data);
    }
    getData();
  });

  const postsChangeHandler = () => {
    setResource('posts');
  };
  const usersChangeHandler = () => {
    setResource('users');
  };
  const commentsChangeHandler = () => {
    setResource('comments');
  };

  return (
    <div className="App">
      <h2>Click on buttons to see the effects</h2>
      <div className="buttons">
        <button className="button1" onClick={postsChangeHandler}>
          Posts
        </button>
        <button className="button2" onClick={usersChangeHandler}>
          Users
        </button>
        <button className="button3" onClick={commentsChangeHandler}>
          Comments
        </button>
      </div>
      <h1>{resource}</h1>
      <ul>
        {apiData.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

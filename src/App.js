import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';
import './App.css';
function App() {
  const [gettedData, setGettedData] = useState();
  let location = useLocation();
  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        `http://localhost:3035${location.pathname}${location.search}`
      );
      setGettedData(result.data);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1 className="header">SWAPI</h1>
      <Link
        className="links"
        to={{
          pathname: '/people/1',
        }}
        onClick={async () => {
          const result = await axios(`http://localhost:3035/people/1`);
          setGettedData(result.data);
        }}
      >
        Finde People
      </Link>
      <Link
        className="links"
        to={{
          pathname: '/planets/1',
        }}
        onClick={async () => {
          const result = await axios(`http://localhost:3035/planets/1`);
          setGettedData(result.data);
        }}
      >
        Find Planets
      </Link>
      <Link
        className="links"
        to={{
          pathname: '/people/1',
          search: '?encoding=ewok',
        }}
        onClick={async () => {
          const result = await axios(
            `http://localhost:3035/people/1?encoding=ewok`
          );
          setGettedData(result.data);
        }}
      >
        Wookie bibbibbib
      </Link>
      <ul className="list">
        {gettedData &&
          Object.keys(gettedData).map((el) => {
            return (
              <li key={el} className="items">
                {el} : {gettedData[el]}{' '}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './css.css';
import Header from './Header';
import Team from './Team.js';
import DataForRace from './DataForRace';
import reportWebVitals from './reportWebVitals';
import DataName from './DataName';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <React.StrictMode>
      <Header />
      <DataName />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <DataForRace />
      {/* <footer className="copyright">Aleksej and Eugene &#169; 2023</footer> */}
    </React.StrictMode>
    ,
  </div>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

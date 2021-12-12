import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css'

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <div></div>
      <App />
      <div></div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


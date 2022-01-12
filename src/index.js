import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CandyCorner } from "./components/CandyCorner"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CandyCorner />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

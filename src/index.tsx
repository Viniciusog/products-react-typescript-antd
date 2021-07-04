import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import App from './App';
import PagesContextProvider from "./store/pages-context"


ReactDOM.render(
  <BrowserRouter>
    <PagesContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PagesContextProvider>
  </BrowserRouter>,

  document.getElementById('root')
);

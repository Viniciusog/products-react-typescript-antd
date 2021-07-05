import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import App from './App';
import PagesContextProvider from "./store/pages-context"
import ProductContextProvider from "./store/products-context"


ReactDOM.render(
  <BrowserRouter>
    <ProductContextProvider>
      <PagesContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PagesContextProvider>
    </ProductContextProvider>
  </BrowserRouter>,

  document.getElementById('root')
);

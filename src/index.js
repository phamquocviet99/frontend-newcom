import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import translations from './translation'
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'


let lang = localStorage.getItem('lang');

let reducers = combineReducers(Object.assign({}, { Intl }))

let store = createStore(reducers, { Intl: { locale: lang?"vn":"en"}})


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( 
<Provider store={store}>
    <IntlProvider translations={translations}>
      <App />
    </IntlProvider>
  </Provider>);

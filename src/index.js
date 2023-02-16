import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { reducers } from "./Redux/Reducers/index"
import thunk from "redux-thunk"
import { legacy_createStore, applyMiddleware, compose } from "redux"
import { GoogleOAuthProvider } from "@react-oauth/google"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <GoogleOAuthProvider clientId={`753718326428-8fg7551745gknkvhpdltpuvushbitf61.apps.googleusercontent.com`}>
          <App/>
        </GoogleOAuthProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

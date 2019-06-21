import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './components/rootreducer';
import reduxPromise from "redux-promise";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(reduxPromise, thunk));

setTimeout(() => console.log(store.getState()), 3000)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import homereducer from './component/reducers/homereducer';
import { provider } from 'redux';
import { createStore } from 'redux';

const store = createStore(homereducer);

ReactDOM.render(<Provider store ={store}><App /></Provider>, document.getElementById('root'));
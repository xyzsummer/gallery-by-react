import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';  //模块化开发，引用Main模块，命名为App

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));

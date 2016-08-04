// Developer TODO: add application entry point
import React from 'react';
import ReactDOM from 'react-dom';
import List from './App.js';
import './index.css';


const list = {
  title: "Your List of Stuff To Do",
}



ReactDOM.render(
  <List
   title={list.title}
   />,
  document.getElementById('root')
)

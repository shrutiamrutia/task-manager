
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/Store/reducer';
import TaskList from './components/taskList';
import './App.css'

ReactDOM.render(
  <Provider store={store}>
    <TaskList />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import DocumentTitle from './components/DocumentTitle';
// import MousePosition from './components/MousePosition';
import Request from './components/Request';
// import LoginForm from './components/LoginForm';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <DocumentTitle /> */}
    {/* <MousePosition /> */}
    {/* <LoginForm /> */}
    <Request />
  </React.StrictMode>,
  document.getElementById('root')
);

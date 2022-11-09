import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'Profile/Components/App';
import './index.css';

// =================================================================
// Старий метод.
// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: 'Hi world',
// });
// // console.log(element);

// // ReactDOM.render(element, document.querySelector('#root'));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// // const element = <h1>Hello, world</h1>;
// root.render(element);
// ============================Новий метод======================================

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    ( <App />)
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     ( <AppStyles />)
//   </React.StrictMode>
// );

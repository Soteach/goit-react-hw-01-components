import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'Profile/Components/App';
import './index.css';
import AppStats from 'Statistics/components/StatMain/StatMain';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    ( <App />,
    <AppStats />)
  </React.StrictMode>
);

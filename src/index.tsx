import React from 'react';
import ReactDOM from 'react-dom';

// components
import App from './components/App/App';

// styles
import './index.scss';
import './welcome-text.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

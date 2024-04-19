import React from 'react';
import ReactDOM from 'react-dom/client';
import '@itgenio/gkit/index.css';
import '@itgenio/icons/index.css';
import './stylesheets/index.less';
import { UikitDemo } from './pages/uikit';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UikitDemo />
  </React.StrictMode>
);

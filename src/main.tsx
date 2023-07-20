import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';

import 'normalize.css';
import '@styles/root.css';
import '@styles/container.css';
import '@styles/link.css';

import '@styles/common/btn.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

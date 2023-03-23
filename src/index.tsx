import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './page/App';

const rootEl = document.getElementById('root')

if (!rootEl) {
  throw new Error("root element not found")
}

const root = ReactDOM.createRoot(rootEl);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

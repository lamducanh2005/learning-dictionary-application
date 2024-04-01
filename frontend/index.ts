import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';

createRoot(document.getElementById('lambda-v2')!).render(createElement(App));

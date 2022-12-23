import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './scss/main.scss';
import { App } from './components';
import { AppContextProvider } from './contexts/app/AppContextProvider';
import reportWebVitals from './reportWebVitals';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './api';

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

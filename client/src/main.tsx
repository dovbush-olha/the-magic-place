import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './app/style/globalStyles';
import { routes } from './app/providers/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Suspense fallback={<div />}>
      <RouterProvider router={routes} />
    </Suspense>
  </React.StrictMode>
);

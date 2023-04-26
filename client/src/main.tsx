import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './Root';
import { HomePage } from './pages/HomePage';
import GlobalStyle from './globalStyles';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'research',
        async lazy() {
          const { ResearchPage } = await import('./pages/ResearchPage');
          return {
            Component: ResearchPage,
          };
        },
      },
      {
        path: 'houses',
        async lazy() {
          const { HousesPage } = await import('./pages/HousesPage');
          return {
            Component: HousesPage,
          };
        },
      },
      {
        path: 'spells',
        async lazy() {
          const { SpellsPage } = await import('./pages/SpellsPage');
          return {
            Component: SpellsPage,
          };
        },
      },
      {
        path: 'auth',
        async lazy() {
          const { AuthPage } = await import('./pages/AuthPage');
          return {
            Component: AuthPage,
          };
        },
      },
      {
        path: 'profile',
        async lazy() {
          const { ProfilePage } = await import('./pages/ProfilePage');
          return {
            Component: ProfilePage,
          };
        },
      },
      {
        path: 'settings',
        async lazy() {
          const { SettingsPage } = await import('./pages/SettingsPage');
          return {
            Component: SettingsPage,
          };
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={routes} />
  </React.StrictMode>
);

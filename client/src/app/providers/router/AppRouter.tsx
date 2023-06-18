import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { AuthPage } from 'pages/AuthPage';
import { ResearchPage } from 'pages/ResearchPage';
import { HousesPage } from 'pages/HousesPage';
import { SpellsPage } from 'pages/SpellsPage';
import { ProfilePage } from 'pages/ProfilePage';
import { SettingsPage } from 'pages/SettingsPage';
import { Root } from '../../Root';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'research',
        element: <ResearchPage />,
      },
      {
        path: 'houses',
        element: <HousesPage />,
      },
      {
        path: 'spells',
        element: <SpellsPage />,
      },
      {
        path: 'auth',
        element: <AuthPage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
    ],
  },
]);

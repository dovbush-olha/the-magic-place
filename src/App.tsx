import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './UI/Footer';
import Header from './UI/Header';

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const ResearchPage = lazy(() => import('./pages/ResearchPage/ResearchPage'));
const HomesPage = lazy(() => import('./pages/HomesPage/HomesPage'));
const SpellsPage = lazy(() => import('./pages/SpellsPage/SpellsPage'));
const AuthPage = lazy(() => import('./pages/AuthPage/AuthPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage/SettingsPage'));

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense>
                <MainPage />
              </Suspense>
            }
          />
          <Route
            path="/research"
            element={
              <Suspense>
                <ResearchPage />
              </Suspense>
            }
          />
          <Route
            path="/homes"
            element={
              <Suspense>
                <HomesPage />
              </Suspense>
            }
          />
          <Route
            path="/spells"
            element={
              <Suspense>
                <SpellsPage />
              </Suspense>
            }
          />
          <Route
            path="/auth"
            element={
              <Suspense>
                <AuthPage />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense>
                <ProfilePage />
              </Suspense>
            }
          />
          <Route
            path="/settings"
            element={
              <Suspense>
                <SettingsPage />
              </Suspense>
            }
          />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

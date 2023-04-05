import { Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import HomesPage from './pages/HomesPage/HomesPage';
import MainPage from './pages/MainPage/MainPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ResearchPage from './pages/ResearchPage/ResearchPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import SpellsPage from './pages/SpellsPage/SpellsPage';
import Footer from './UI/Footer';
import Header from './UI/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/homes" element={<HomesPage />} />
        <Route path="/spells" element={<SpellsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

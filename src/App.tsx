import { Route, Routes } from 'react-router-dom';
import DormsPage from './pages/DormsPage/DormsPage';
import HomePage from './pages/HomePage/HomePage';
import InvestigationPage from './pages/InvestigatePage/InvestigationPage';
import SupportPage from './pages/SupportPage/SupportPage';
import Header from './UI/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/dorms" element={<DormsPage />} />
        <Route path="/investigate" element={<InvestigationPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

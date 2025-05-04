import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TranslationProvider } from 'context/TranslationContext';

const HomePage = React.lazy(() => import('pages/HomePage'));
const Portfolio = React.lazy(() => import('pages/Portfolio'));

const App: React.FC = () => (
  <Router>
    <TranslationProvider >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </TranslationProvider>
  </Router>
);

export default App;
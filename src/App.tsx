import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChallengePage from './pages/ChallengePage';
import Component from './codex/component'; // Import the ComponentPage

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/challenge/:day" element={<ChallengePage />} />
      <Route path="/components" element={<Component />} /> {/* Add the new route */}
    </Routes>
  );
};

export default App;


import {Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChallengePage from './pages/ChallengePage';

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/challenge/:day" element={<ChallengePage />} />
    </Routes>
  );
};

export default App;
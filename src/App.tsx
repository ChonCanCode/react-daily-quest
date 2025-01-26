import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChallengePage from './pages/ChallengePage';
import Component from './codex/Component'; // Import the ComponentPage
import State from './codex/state'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/challenge/:day" element={<ChallengePage />} />
      <Route path="/component" element={<Component />} /> {/* Add the new route */}
      <Route path="/state" element={ <State />}/>
    </Routes>
  );
};

export default App;

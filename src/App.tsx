import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChallengePage from "./pages/ChallengePage";
import Component from "./concepts/Component"; // Import the ComponentPage
import State from "./concepts/State";
import Hook from "./concepts/Hook";
import Dependence from "./concepts/Dependence";
import TypeScript from "./concepts/TypeScript";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/challenge/:day" element={<ChallengePage />} />
      <Route path="/Component" element={<Component />} />{" "}
      {/* Add the new route */}
      <Route path="/State" element={<State />} />
      <Route path="/Hook" element={<Hook />} />
      <Route path="/TypeScript" element={<TypeScript />} />
      <Route path="/Dependence" element={<Dependence />} />
    </Routes>
  );
};

export default App;

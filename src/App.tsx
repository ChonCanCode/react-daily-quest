import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChallengePage from "./pages/ChallengePage";
import Component from "./concepts/Component"; // Import the ComponentPage
import State from "./concepts/State";
import Hook from "./concepts/Hook";
import Dependencies from "./concepts/Dependencies";
import TypeScript from "./concepts/TypeScript";
import Props from "./concepts/Props";

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
      <Route path="/Dependencies" element={<Dependencies />} />
      <Route path="/Props" element={<Props />} />
    </Routes>
  );
};

export default App;

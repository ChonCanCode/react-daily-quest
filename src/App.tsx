import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChallengePage from "./pages/ChallengePage";
import Component from "./concepts/Component"; 
import State from "./concepts/State";
import Hook from "./concepts/Hook";
import Dependencies from "./concepts/Dependencies";
import TypeScript from "./concepts/TypeScript";
import Props from "./concepts/Props";
import Vite from "./concepts/Vite";
import StreetFighter6 from "./projects/StreetFighter6";
import CLI from "./concepts/CLI";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/challenge/:day" element={<ChallengePage />} />
      <Route path="/component" element={<Component />} />
      <Route path="/state" element={<State />} />
      <Route path="/hook" element={<Hook />} />
      <Route path="/typescript" element={<TypeScript />} />
      <Route path="/dependencies" element={<Dependencies />} />
      <Route path="/props" element={<Props />} />
      <Route path="/vite" element={<Vite />} />
      <Route path="/projects/streetfighter6" element={<StreetFighter6/>} /> 
      <Route path="/cli" element={<CLI/>} /> 
      </Routes>
  );
};

export default App;

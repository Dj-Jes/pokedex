
import { Routes, Route, HashRouter } from "react-router-dom";
import AbouteTest from "./routes/AbouteTest";
import Pokedex from "./routes/Pokedex";

function App() {
  return (
    <HashRouter>
      <>
        <Routes>

          <Route exact path="/" element={<Pokedex />} />
          <Route exact path="/AbouteTest" element={<AbouteTest />} />
        </Routes>
      </>
    </HashRouter>
  );
}

export default App;
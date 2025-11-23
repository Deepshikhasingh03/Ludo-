import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GameSetup from "./assets/components/GameSetup";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        {/* Game setup page */}
        <Route path="/setup" element={<GameSetup />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

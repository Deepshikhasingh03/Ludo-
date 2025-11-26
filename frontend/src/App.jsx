import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage'
import GameSetup from "./components/GameSetup";
import Home from './components/Home'
import Game from "./pages/Game";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Game setup page */}
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path="/Game" element={<Game />} />
        <Route path="/setup" element={<GameSetup />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

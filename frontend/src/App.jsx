import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import GameSetup from "./components/GameSetup";
import Home from "./components/Home";
import Game from "./pages/Game";
import Event from "./pages/Event";
import Social from "./pages/Social";
import Inventory from "./pages/Inventory";
import Store from "./pages/Store";
import OnlinePlay from "./components/OnlinePlay";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Game setup page */}
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Game" element={<Game />} />
        <Route path="/setup" element={<GameSetup />} />
        <Route path="/online-play" element={<OnlinePlay />} /> {/* NEW ROUTE */}


        <Route path="/event" element={<Event />} />
        <Route path="/social" element={<Social />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import GameSetup from "./components/GameSetup";
import Home from "./components/Home";
import Game from "./pages/Game";
import Event from "./pages/Event";
import Social from "./pages/Social";
import Inventory from "./pages/Inventory";
import Store from "./pages/Store";
import OnlinePlay from "./components/OnlinePlay";
import Friend from "./components/GameModes/Friend";
import Friend2 from "./components/GameModes/Friend2";
import PassN from "./components/GameModes/PassN";
import Pclassic from "./components/GameModes/Pclassic";
import Pteamup from "./components/GameModes/Pteamup";
import Teamup from "./components/GameModes/Teamup";
import Teamup2 from "./components/GameModes/Teamup2";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Search from "./pages/Search";
import EditProfile from "./pages/EditProfile";
import PlayUi from "./components/GamePlay/PlayUi";

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

        {/* Game mode routes from front folder */}
        <Route path="/friend" element={<Friend />} />
        <Route path="/friend2" element={<Friend2 />} />
        <Route path="/passn" element={<PassN />} />
        <Route path="/pclassic" element={<Pclassic />} />
        <Route path="/pteamup" element={<Pteamup />} />
        <Route path="/teamup" element={<Teamup />} />
        <Route path="/teamup2" element={<Teamup2 />} />

        <Route path="/event" element={<Event />} />
        <Route path="/social" element={<Social />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/store" element={<Store />} />

         <Route path="/profile" element={<Profile/>} />
        <Route path="/settings" element={<Settings />} />
         <Route path="/search" element={<Search />} />
          <Route path="/editprofile" element={<EditProfile />} />

         <Route path="/playui" element={<PlayUi />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

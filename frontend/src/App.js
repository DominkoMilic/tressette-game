import React, { useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/LoginPage";
import RegistrationPage from "./components/Login/RegistrationPage";
import MainMenuPage from "./components/MainMenu/MainMenuPage";
import CreateGame from "./components/CreateGame/CreateGamePage";
import JoinGame from "./components/JoinGame/JoinGame";
import LeaderboardPage from "./components/LeaderboardPage/LeaderboardPage";
import RulesPage from "./components/RulesPage/RulesPage";
import StatsPage from "./components/StatsPage/StatsPage";
import MyStatsPage from "./components/LeaderboardPage/MyStatsPage";

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/hello")
      .catch((error) => console.error("There was an error!", error));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/main-menu" element={<MainMenuPage />} />
        <Route path="/create-game" element={<CreateGame />} />
        <Route path="/join-game" element={<JoinGame />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/stats/leaderboard" element={<LeaderboardPage />} />
        <Route path="/stats/my-stats" element={<MyStatsPage />} />
      </Routes>
    </div>
  );
}
export default App;

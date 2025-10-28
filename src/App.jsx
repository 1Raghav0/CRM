import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./CRM/Home";
import Marketing from "./Pages/Marketing/Marketing";
import Platforms from "./Pages/Platforms/Platforms";
import LeaderBoard from "./Pages/Leaderboard/LeaderBoard";
import CopierDashboard from "./Pages/Copier/CopierDashboard";
import DepositBonus from "./Components/DepositBonus";
import MoneyDashboard from "./Components/MoneyDashboard";
import LeaderHubDashboard from "./Components/LeaderHubDashboard";
import NomoGPTLayout from "./Components/NomoGPTLayout";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/money/50-deposit-bonus" element={<DepositBonus />} />
        <Route path="/money" element={<MoneyDashboard />} />
        <Route path="/trading/marketing" element={<Marketing />} />
        <Route path="/trading/platforms" element={<Platforms />} />
        <Route path="/copy-trading/leaderboard" element={<LeaderBoard />} />
        <Route path="/copy-trading/copier-dashboard" element={<CopierDashboard />} />
        <Route path="/copy-trading/leaders-hub/dashboard" element={<LeaderHubDashboard />} />
        <Route path="/nomo-gpt" element={<NomoGPTLayout />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

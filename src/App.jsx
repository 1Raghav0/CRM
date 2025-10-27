import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./CRM/Home";
import Marketing from "./Pages/Marketing/Marketing";
import Platforms from "./Pages/Platforms/Platforms";
import LeaderBoard from "./Pages/Leaderboard/LeaderBoard";
import CopierDashboard from "./Pages/Copier/CopierDashboard";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trading/marketing" element={<Marketing />} />
        <Route path="/trading/platforms" element={<Platforms />} />
        <Route path="/copy-trading/leaderboard" element={<LeaderBoard />} />
        <Route path="/copy-trading/copier-dashboard" element={<CopierDashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

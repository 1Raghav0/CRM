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
import NomoAiIndex from "./CRM/NomoAiIndex";
import DepositMethods from "./CRM/DepositMethods";
import Portfolio from "./Components/Portfolio";
import IngridMartingaleCard from "./CRM/IngridMartingaleCard";
import NatyProfileCard from "./CRM/NatyProfileCard";
import StratosProfile from "./CRM/StratosProfile";
import ScalpingCard from "./CRM/ScalpingCard";
import CryptoDetailPage from "./Pages/Marketing/CryptoDetailPage.jsx";
import TrendingAssetsDetailPage from "./Pages/Marketing/TrendingAssetsDetailPage.jsx";
import StockDashboardDetailPage from "./CRM/StockDashboardDetailPage.jsx";
import CommodityDetailPage from "./Pages/Marketing/CommodityDetailPage.jsx";
import CryptoMarketTableDetailPage from "./Pages/Marketing/CryptoMarketTableDetailPage.jsx";
import ForexMarketTableDetailPage from "./Pages/Marketing/ForexMarketTableDetailPage.jsx";
import IndicesDataTableDetailPage from "./Pages/Marketing/IndicesDataTableDetailPage.jsx";
import StocksTableDetailPage from "./Pages/Marketing/StocksTableDetailPage.jsx";
import SyntheticIndicesDetailPage from "./Pages/Marketing/SyntheticIndicesDetailPage.jsx";
import TraderDetailPage from "./Pages/Leaderboard/TraderDetailPage.jsx";
import LeadTraderSection from "./Pages/Copier/LeadTraderSection.jsx";
import LeaderRequirement from "./Pages/Copier/LeaderRequirement.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/copy-trading/nomo-ai-index" element={<NomoAiIndex />} />
        <Route path="/money/deposit" element={<DepositMethods />} />
        <Route path="/money/50-deposit-bonus" element={<DepositBonus />} />
        <Route path="/money" element={<MoneyDashboard />} />
        <Route path="/portfolio/open" element={<Portfolio />} />
        <Route path="/trading/marketing" element={<Marketing />} />
        <Route path="/crypto/:name" element={<CryptoDetailPage />} />
        <Route path="/asset/:symbol" element={<TrendingAssetsDetailPage />} />
        <Route path="/stock/:symbol" element={<StockDashboardDetailPage />} />
        <Route path="/commodity/:ticker" element={<CommodityDetailPage />} />
        <Route path="/crypto/:symbol" element={<CryptoMarketTableDetailPage />} />
        <Route path="/forex/:symbol" element={<ForexMarketTableDetailPage />} />
        <Route path="/indices/:name" element={<IndicesDataTableDetailPage />} />
        <Route path="/stocks/:name" element={<StocksTableDetailPage />} />
        <Route path="/synthetic/:name" element={<SyntheticIndicesDetailPage />} />
        <Route path="/trading/platforms" element={<Platforms />} />
        <Route path="/copy-trading/leaderboard" element={<LeaderBoard />} />
        <Route path="/trader/:name" element={<TraderDetailPage />} />
        <Route path="/copy-trading/copier-dashboard" element={<CopierDashboard />} />
        <Route path="/copy-trading/leaders-hub/dashboard" element={<LeaderHubDashboard />} />
        <Route path="/copy-trading/leader-onboarding" element={<LeadTraderSection />} />
        <Route path="/copy-trading/leader-onboarding/start" element={<LeaderRequirement />} />
        <Route path="/copy-trading/trader/70f365e2-3b5c-4de5-a9f5-d0d7b5ad925f" element={<IngridMartingaleCard />} />
        <Route path="/copy-trading/trader/41614b29-26b3-4b3c-980d-0cefc8712511" element={<NatyProfileCard />} />
        <Route path="/copy-trading/trader/e1db2d30-37d9-4ac8-bbf8-db25e36b1fbd" element={<StratosProfile />} />
        <Route path="/copy-trading/trader/a8c7d67b-d5f9-436f-aacc-167fbbcf8217" element={<ScalpingCard />} />
        <Route path="/nomo-gpt" element={<NomoGPTLayout />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./CRM/Home";
import Marketing from "./Pages/Marketing/Marketing";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trading/marketing" element={<Marketing />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landing_pages/home/HomePage";
import SignupPage from "./landing_pages/signup/SignupPage";
import AboutPage from "./landing_pages/about/AboutPage";
import ProductPage from "./landing_pages/products/ProductPage";
import PricingPage from "./landing_pages/pricing/PricingPage";
import SupportPage from "./landing_pages/support/SupportPage";
import Navbar from "./landing_pages/Navbar";
import Footer from "./landing_pages/Footer";
import NotFound from "./landing_pages/NotFound";
import CurrencyTable from "./landing_pages/pricing/CurrencyTable";
import EquityTable from "./landing_pages/pricing/EquityTable";
import CommodityTable from "./landing_pages/pricing/CommodityTable";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/products" element={<ProductPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="/pricing/equity" element={<EquityTable />}></Route>
      <Route path="/pricing/currency" element={<CurrencyTable />}></Route>
      <Route path="/pricing/commodity" element={<CommodityTable />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);

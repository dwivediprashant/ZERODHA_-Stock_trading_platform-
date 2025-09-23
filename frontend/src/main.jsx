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
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);

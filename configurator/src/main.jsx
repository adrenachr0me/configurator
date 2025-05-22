"use client";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import Header from "./components/header";
import Banner from "./components/banner";
import Sponsors from "./components/sponsors";
import Footer from "./components/footer";
import FeaturedBuilds from "./components/featured-builds";
import WhyChooseUs from "./components/why-choose-us";
import Testimonials from "./components/testimonials";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Configurator from "./components/configurator";
import Button from "./components/banner-button";
import LoginPage from "./components/login";
import LoginLogin from "./components/login-login";
import BuyCart from "./components/cart";

function MainPage() {
  return (
    <div className="mainpage">
      <Header />
      <Banner />
      <WhyChooseUs />
      <FeaturedBuilds />
      <Testimonials />
      <Sponsors />
      <Footer />
    </div>
  );
}

function AppWithConfigurator() {
  const [config, setConfig] = useState({
    cpu: null,
    gpu: null,
    ram: null,
    storage: null,
    cooler: null,
    power: null,
    motherboard: null,
    case: null,
  });

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route
        path="/cart"
        element={<BuyCart config={config} setConfig={setConfig} />}
      />
      <Route
        path="/configurator"
        element={<Configurator config={config} setConfig={setConfig} />}
      />
      <Route path="/banner-button" element={<Button />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login-login" element={<LoginLogin />} />
    </Routes>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppWithConfigurator />
    </BrowserRouter>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header";
import Banner from "./components/banner";
import Sponsors from "./components/sponsors";
import Footer from "./components/footer";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Banner />
    <Sponsors />
    <Footer />
  </StrictMode>
);

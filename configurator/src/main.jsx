import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header";
import Banner from "./components/banner";
import Sponsors from "./components/sponsors";
import Footer from "./components/footer";
import "./index.css";
import CartSite from "./components/cart-site";
import Menu from "./components/menu";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Banner />
    <Sponsors />
    <Footer />
  </StrictMode>
);

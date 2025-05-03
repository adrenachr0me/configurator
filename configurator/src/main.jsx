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
import Configurator from "./components/configurator";
import Button from "./components/banner-button";
import LoginPage from "./components/login";
import LoginLogin from "./components/login-login";

function MainPage() {
  return (
    <div className="mainpage">
      <Header />
      <Banner />
      <Sponsors />
      <Footer />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartSite />} />
        <Route path="/configurator" element={<Configurator />} />
        <Route path="/banner-button" element={<Button />} />
        <Route path="/login" element={<LoginPage />} />
        <Route exact path="/login-login" component={LoginLogin} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

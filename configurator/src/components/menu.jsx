import BuyCart from "./cart";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import "../index.css";
function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>Configurations</li>
        <li>Components</li>
        <li>Build Guides</li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>Support</li>
      </ul>
    </div>
  );
}

export default Menu;

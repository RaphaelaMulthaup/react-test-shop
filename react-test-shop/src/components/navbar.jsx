import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand bg-light border-bottom">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link to="/products" className="navbar-brand fw-bold">
          Mein Shop
        </Link>
        <div className="menu-links d-flex gap-3">
          <Link to="/products" className="nav-link px-0" data-text="Produkte">
            Produkte
          </Link>
          <Link to="/products/new" className="nav-link px-0" data-text="Neues Produkt">
            Neues Produkt
          </Link>
          <Link to="/cart" className="nav-link px-0" data-text="Warenkorb">
            Warenkorb
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

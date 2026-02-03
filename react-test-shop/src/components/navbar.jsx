import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand bg-light border-bottom">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <NavLink to="/products" end className="navbar-brand fw-bold">
          Mein Shop
        </NavLink>
        <div className="menu-links d-flex gap-3 me-3">
          <div className="menu-item">
            <NavLink
              to="/products"
              end
              className="nav-link px-0"
              data-text="Produkte"
            >
              Produkte
            </NavLink>
          </div>
          <div className="menu-item">
            <NavLink
              to="/products/new"
              className="nav-link px-0"
              data-text="Neues Produkt"
            >
              Neues Produkt
            </NavLink>
          </div>
          <div className="menu-item">
            <NavLink to="/cart" className="nav-link px-0" data-text="Warenkorb">
              Warenkorb
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

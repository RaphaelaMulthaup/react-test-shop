import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand bg-light border-bottom">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link to="/products" className="navbar-brand fw-bold">
          Mein Shop
        </Link>
        <div className="d-flex gap-2">
          <Link to="/products" className="btn btn-outline-primary">
            Produkte
          </Link>

          <Link to="/products/new" className="btn btn-outline-primary">
            Neues Produkt
          </Link>
          <Link to="/cart" className="btn btn-outline-primary">
            Warenkorb
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

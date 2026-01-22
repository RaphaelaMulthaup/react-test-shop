import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Mein Shop</h1>
      <Link to="/products">Produkte</Link>
      <Link to="/cart">Warenkorb</Link>
      <Link to="/products/new">Neues Produkt</Link>
    </nav>
  );
};

export default Navbar;

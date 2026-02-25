import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/?search=${search}`);
      setSearch("");
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">
          🛒 Shopee
        </Link>
      </div>

      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <div className="nav-right">
        <Link to="/" className="nav-link">
          Home
        </Link>

        <Link to="/cart" className="cart-link">
          🛍 Cart
          {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

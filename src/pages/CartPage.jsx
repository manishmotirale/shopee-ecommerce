import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price * 83);

function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div>
            <h4>{item.title}</h4>
            <p>{formatPrice(item.price)}</p>
          </div>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      {cart.length > 0 && (
        <Link to="/checkout" className="checkout-btn">
          Proceed to Checkout
        </Link>
      )}
    </div>
  );
}

export default CartPage;

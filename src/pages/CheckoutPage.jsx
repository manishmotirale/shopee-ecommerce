function CheckoutPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <form className="checkout" onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email" required />
      <input type="text" placeholder="Address" required />
      <button type="submit">Place Order</button>
    </form>
  );
}

export default CheckoutPage;

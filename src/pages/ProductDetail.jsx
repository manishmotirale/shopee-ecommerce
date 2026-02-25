import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../services/api";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price * 83);

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <p className="loading">Loading...</p>;

  return (
    <div className="detail">
      <img src={product.image} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>{formatPrice(product.price)}</h3>
      </div>
    </div>
  );
}

export default ProductDetail;

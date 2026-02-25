import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

function Home() {
  const { products, loading } = useProducts();

  if (loading) return <p className="loading">Loading...</p>;

  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;

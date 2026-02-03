import Product from "../components/product";
import "./product-page.css";

const ProductPage = ({ products, isLoading, error, onaddToCart }) => {
  if (isLoading) {
    return <p>Lade Produkte …</p>;
  }
  if (error) {
    return <p>Fehler: {error}</p>;
  }
  return (
    <div className="main-container-left">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            onAdd={() => onaddToCart(product.id)}
            title={product.name}
            description={product.description}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

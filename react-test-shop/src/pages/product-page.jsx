import Product from "../components/product";

const ProductPage = ({ products, onaddToCart }) => {
  return (
    <div className="main-container-left">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.productId}
            onAdd={() => onaddToCart(product.productId)}
            title={product.name}
            description={product.description}
            price={product.price}
            productId={product.productId}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

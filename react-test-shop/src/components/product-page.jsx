import Product from "./product";
import FormNewProduct from "./form-new-product";

const ProductPage = ({ products, onAddItem, onAddNewProduct }) => {
  return (
    <div className="main-container-left">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.productId}
            onAdd={() => onAddItem(product.productId)}
            title={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>

      <FormNewProduct onSubmit={onAddNewProduct} existingProducts={products} />
    </div>
  );
};

export default ProductPage;

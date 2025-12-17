import React, { Component } from "react";
import Product from "./product";
import FormNewProduct from "./form-new-product";

class ProductPage extends Component {
  state = {};
  render() {
    const { products, onAddItem, onAddNewProduct } = this.props;

    return (
      <div className="main-container-left">
        <div className="product-container">
          {products.map((product) => (
            <Product
              key={product.productId}
              onAdd={() => onAddItem(product)}
              title={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>

        <FormNewProduct
          onSubmit={onAddNewProduct}
          existingProducts={products}
        />
      </div>
    );
  }
}

export default ProductPage;

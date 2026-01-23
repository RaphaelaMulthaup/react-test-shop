import { useParams } from "react-router-dom";

function ProductDetailPage({ products }) {
  const { productId } = useParams();
const numericProductId = Number(productId);
  
  
  const product = products.find((p) => p.productId === numericProductId);

  if (!product) {
    return <p>Produkt nicht gefunden</p>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Preis: {product.price} €</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetailPage;

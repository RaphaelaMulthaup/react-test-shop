import { useParams } from "react-router-dom";

function ProductDetailPage({ products, onAdd }) {
  const { productId } = useParams();
  const numericProductId = Number(productId);

  const product = products.find((p) => p.productId === numericProductId);

  if (!product) {
    return <p>Produkt nicht gefunden</p>;
  }

  return (
    <div>
      <img
        className="card-img-top"
        src={`/assets/img/${product.name.toLowerCase()}.jpg`}
        alt={`Image of ${product.name}`}
      />
      <h2>{product.name}</h2>
      <p>Preis: {product.price} €</p>
      <p>{product.description}</p>
      <button
        onClick={() => onAdd(product.productId)}
        className="btn btn-primary"
      >
        Hinzufügen
      </button>
    </div>
  );
}

export default ProductDetailPage;

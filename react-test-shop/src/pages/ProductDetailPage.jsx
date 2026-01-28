import { useParams } from "react-router-dom";

function ProductDetailPage({ products, onAdd }) {
  const { id } = useParams();
  const numericid = Number(id);

  const product = products.find((p) => p.id === numericid);

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
        onClick={() => onAdd(product.id)}
        className="btn btn-primary"
      >
        Hinzufügen
      </button>
    </div>
  );
}

export default ProductDetailPage;

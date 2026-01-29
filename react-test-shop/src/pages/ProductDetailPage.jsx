import { useParams } from "react-router-dom";

function ProductDetailPage({ products, isLoading, error, onAdd }) {
  const { id } = useParams();
  const numericid = Number(id);
  if (isLoading) {
    return <p>Lade Produkt …</p>;
  }

  if (error) {
    return <p>Fehler beim Laden des Produkts</p>;
  }
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
      <button onClick={() => onAdd(product.id)} className="btn btn-primary">
        Hinzufügen
      </button>
    </div>
  );
}

export default ProductDetailPage;

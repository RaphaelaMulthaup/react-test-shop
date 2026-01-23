import { Link } from "react-router-dom";

const Product = ({ title, description, price, onAdd, productId }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={`/assets/img/${title.toLowerCase()}.jpg`}
        alt={`Image of ${title}`}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p>{price}€</p>
        <button onClick={onAdd} className="btn btn-primary">
          Hinzufügen
        </button>
        <Link to={`/product/${productId}`}>Details ansehen</Link>
      </div>
    </div>
  );
};

export default Product;

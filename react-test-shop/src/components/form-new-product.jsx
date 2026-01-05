import { useState } from "react";
import { validateProduct } from "./../validateProduct";

function FormNewProduct({ existingProducts, onSubmit }) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    name: null,
    price: null,
    duplicate: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const parsedValue = name === "price" ? Number(value) : value;

    setNewProduct((prevNewProduct) => ({
      ...prevNewProduct,
      [name]: parsedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateProduct(newProduct, existingProducts);
    setErrors(validationErrors);
    if (Object.values(validationErrors).some((value) => value !== null)) {
      return;
    }
    onSubmit(newProduct);
    setNewProduct({ name: "", price: "", description: "" });
    setErrors({
      name: null,
      price: null,
      duplicate: null,
    });
  };

  const { name, price, description } = newProduct;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span className="label">Produktname:</span>

        <input
          name="name"
          value={name}
          onChange={handleChange}
          type="text"
          placeholder="z. B. Apfelsaft"
        />
      </label>
      {errors.name && <div className="error">{errors.name}</div>}

      <label>
        <span className="label"> Preis:</span>

        <input
          name="price"
          value={price}
          onChange={handleChange}
          type="number"
          placeholder="z. B. 3.99"
          step="0.01"
        />
      </label>
      {errors.price && <div className="error">{errors.price}</div>}

      <label>
        <span className="label">Beschreibung:</span>

        <input
          name="description"
          value={description}
          onChange={handleChange}
          type="text"
          placeholder="z. B. Frischer Bio-Apfelsaft"
        />
      </label>
      {errors.duplicate && (
        <div className="error">{errors.duplicate}</div>
      )}

      <button type="submit">Produkt hinzufügen</button>
    </form>
  );
}

export default FormNewProduct;

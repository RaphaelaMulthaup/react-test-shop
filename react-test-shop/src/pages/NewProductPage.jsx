import FormNewProduct from "../components/form-new-product";

function NewProductPage({ existingProducts, onSubmit }) {
  return (
    <div>
      <h1>Neues Produkt</h1>
      <FormNewProduct onSubmit={onSubmit} existingProducts={existingProducts} />
    </div>
  );
}

export default NewProductPage;

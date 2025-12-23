export function validateProduct(product, existingProducts) {
  const errors = {};

  if (!product.name.trim()) {
    errors.name = "Trage einen Namen ein.";
  } else {
    errors.name = null;
  }

  if (product.price <= 0) {
    errors.price = "Trage einen Preis ein, der größer als null ist.";
  } else {
    errors.price = null;
  }

  const exists = existingProducts.some(
    (p) => p.name.toLowerCase() === product.name.toLowerCase()
  );
  if (exists) {
    errors.duplicate = "Ein Produkt mit diesem Namen existiert bereits.";
  } else {
    errors.duplicate = null;
  }
  return errors;
}

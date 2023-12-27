export function filterProducts(products, category, searchText) {
  return products.filter(
    (product) =>
      (product.category === category || category === "all") &&
      (product.title.toLowerCase().includes(searchText.toLowerCase()) ||
        product.description.toLowerCase().includes(searchText.toLowerCase()))
  );
}

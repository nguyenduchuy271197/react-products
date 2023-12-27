import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";

export default function ProductGrid({ category, searchText }) {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const sub = category === "all" ? "" : `/category/${category}`;
    const url = `https://dummyjson.com/products${sub}`;
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchText, category]);

  if (isLoading || products === null) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <div className="grid grid-cols-3 gap-8">
      {products.map((product) => (
        <div className="shadow-xl card bg-base-100" key={product.id}>
          <figure>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="object-cover w-full h-52"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>{product.description}</p>
            <div className="justify-end card-actions">
              <ProductDetail
                id={product.id}
                title={product.title}
                description={product.description}
                thumbnail={product.thumbnail}
                price={product.price}
                brand={product.brand}
                category={product.category}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

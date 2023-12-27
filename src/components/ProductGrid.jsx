import ProductDetail from "./ProductDetail";
import { useQuery } from "@tanstack/react-query";

export default function ProductGrid({ category }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products", category],
    queryFn: async () => {
      const sub = category === "all" ? "" : `/category/${category}`;
      const url = `https://dummyjson.com/products${sub}`;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading || !data) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="grid grid-cols-3 gap-8">
      {data?.products?.map((product) => (
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

import { filterProducts } from "../actions/products";
import ProductDetail from "./ProductDetail";

export default function ProductGrid({ products, category, searchText }) {
  return (
    <div className="grid grid-cols-3 gap-8">
      {filterProducts(products, category, searchText).map((product) => (
        <div className="card bg-base-100 shadow-xl" key={product.id}>
          <figure>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-52 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
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

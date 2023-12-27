import { useState } from "react";
import ProductFilter from "./components/ProductFilter";
import ProductGrid from "./components/ProductGrid";
import SearchBar from "./components/SearchBar";
import { products } from "./data";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("all");
  return (
    <div className="py-16">
      <div className="max-w-screen-xl mx-auto px-8 space-y-8">
        <SearchBar searchText={searchText} onSearchTextChange={setSearchText} />
        <ProductFilter category={category} onCategoryChange={setCategory} />
        <ProductGrid
          products={products}
          category={category}
          searchText={searchText}
        />
      </div>
    </div>
  );
}

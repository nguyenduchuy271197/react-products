import { useState } from "react";
import ProductFilter from "./components/ProductFilter";
import ProductGrid from "./components/ProductGrid";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("all");

  return (
    <div className="py-16">
      <div className="max-w-screen-xl px-8 mx-auto space-y-8">
        <SearchBar searchText={searchText} onSearchTextChange={setSearchText} />
        <ProductFilter category={category} onCategoryChange={setCategory} />
        <ProductGrid category={category} searchText={searchText} />
      </div>
    </div>
  );
}

export default function ProductFilter({ category, onCategoryChange }) {
  const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];

  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">Filter by Category</span>
      </div>
      <select
        className="select select-bordered"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {["all", ...categories].map((c) => (
          <option value={c} key={c}>
            {c.replaceAll("-", " ")}
          </option>
        ))}
      </select>
    </label>
  );
}

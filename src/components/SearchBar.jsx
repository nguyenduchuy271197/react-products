export default function SearchBar({ searchText, onSearchTextChange }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h1 className="text-5xl font-bold">Welcome to Shoppie</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
      <input
        type="text"
        placeholder="Finding products..."
        className="input input-bordered w-full max-w-md"
        value={searchText}
        onChange={(e) => onSearchTextChange(e.target.value)}
      />
    </div>
  );
}

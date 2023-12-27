import PropTypes from "prop-types";

export default function ProductDetail({
  id,
  title,
  description,
  thumbnail,
  price,
  brand,
  category,
}) {
  return (
    <div className="drawer drawer-end">
      <input id={`my-drawer-${id}`} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor={`my-drawer-${id}`}
          className="drawer-button btn btn-primary"
        >
          Detail
        </label>
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor={`my-drawer-${id}`}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 min-h-full bg-base-200 text-base-content max-w-xl w-full">
          <div className="space-y-4">
            <img src={thumbnail} alt={title} className="w-full" />
            <div className="space-y-2">
              <h1 className="font-bold text-4xl">{title}</h1>
              <p className="text-lg">{description}</p>
            </div>
            <div className="text-lg space-y-1">
              <p>
                <strong>Price:</strong> ${price}
              </p>
              <p>
                <strong>Brand:</strong> {brand}
              </p>
              <p>
                <strong>Category:</strong> {category}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  brand: PropTypes.string,
  category: PropTypes.string,
};

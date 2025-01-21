import PropTypes from "prop-types";

const ProductDetils = ({ title, brand, year, price, isPremium }) => {
  return (
    <div className="bg-white shadow p-4 mt-4 rounded-lg">
      <h2 className="font-bold capitalize">title:{title}</h2>
      <p>
        <span className="font-bold capitalize">brand: </span>
        {brand}
      </p>
      <p>
        <span className="font-bold capitalize">year: </span>
        {year}
      </p>
      <p>
        <span className="font-bold capitalize"> price: </span>
        {price}
      </p>
      <p>
        <span className="font-bold capitalize">isPremium: </span>
        {isPremium ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default ProductDetils;
ProductDetils.propTypes = {
  title: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  isPremium: PropTypes.bool.isRequired,
}.isRequired;

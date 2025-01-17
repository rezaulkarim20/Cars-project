import PropTypes from "prop-types";

import ProductDetils from "./ProductDetils";

const ProductCart = ({ item }) => {
  const { title, brand, year, price, isPremium } = item;

  return (
    <div>
      <ProductDetils
        title={title}
        brand={brand}
        year={year}
        price={price}
        isPremium={isPremium}
      />
    </div>
  );
};

ProductCart.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ProductCart;

import PropTypes from "prop-types";

import ProductCart from "./ProductCart";

const Productlist = ({ searchTerm, items }) => {
  const cards = [];

  items.forEach((item) => {
    if (item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }

    cards.push(<ProductCart key={item.id} item={item} />);
  });
  return <div className=" grid grid-cols-3 gap-3 ">{cards}</div>;
};

Productlist.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default Productlist;

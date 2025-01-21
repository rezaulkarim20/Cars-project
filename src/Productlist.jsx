import PropTypes from "prop-types";

import ProductCart from "./ProductCart";

const Productlist = ({ searchTerm, items, CheckPremium }) => {
  const cards = [];

  items.forEach((item) => {
    if (item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }
    if (CheckPremium && !item.isPremium) {
      return;
    }
    cards.push(<ProductCart key={item.id} item={item} />);
  });
  return <div className=" grid grid-cols-3 gap-3 ">{cards}</div>;
};

Productlist.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  CheckPremium: PropTypes.bool.isRequired,
};

export default Productlist;

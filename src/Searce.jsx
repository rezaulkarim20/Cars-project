import PropTypes from "prop-types";
import FilterOnlyPrimium from "./FilterOnlyPrimium";

const Searce = ({ searchTerm, onSearchProduct, onChecker, CheckPremium }) => {
  return (
    <form>
      <div className="flex items-center gap-3  ">
        <input
          className="pr-16 py-1 border outline-none rounded-md"
          type="text"
          value={searchTerm}
          placeholder=" Search cars....."
          onChange={(event) => onSearchProduct(event.target.value)}
        />
        <FilterOnlyPrimium CheckPremium={CheckPremium} onChecker={onChecker} />
      </div>
    </form>
  );
};
Searce.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchProduct: PropTypes.func.isRequired,
  onChecker: PropTypes.string.isRequired,
  CheckPremium: PropTypes.string.isRequired,
};

export default Searce;

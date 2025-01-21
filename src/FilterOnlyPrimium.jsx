import PropTypes from "prop-types";

const FilterOnlyPrimium = ({ onChecker, CheckPremium }) => {
  return (
    <div>
      <span className="flex gap-2">
        <input
          type="checkbox"
          id="premium"
          checked={CheckPremium}
          onChange={onChecker}
        />
        <label htmlFor="premium">Who Premium Only</label>
      </span>
    </div>
  );
};
FilterOnlyPrimium.propTypes = {
  onChecker: PropTypes.bool.isRequired,
  CheckPremium: PropTypes.func.isRequired,
};

export default FilterOnlyPrimium;

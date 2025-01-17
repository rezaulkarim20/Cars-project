import Header from "./Header";
import Productlist from "./Productlist";
import Searce from "./Searce";

const Product = () => {
  return (
    <div className="mx-auto p-10">
      <Header />
      <Searce />
      <Productlist />
    </div>
  );
};

export default Product;

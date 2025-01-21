import { useState } from "react";
import Header from "./Header";
import Productlist from "./Productlist";
import Searce from "./Searce";

const PRODUCTS = [
  {
    id: 1,
    title: "Luxury Sedan",
    brand: "Mercedes",
    year: 2023,
    price: 80000,
    isPremium: true,
  },
  {
    id: 2,
    title: "Family SUV",
    brand: "Toyota",
    year: 2022,
    price: 45000,
    isPremium: false,
  },
  {
    id: 3,
    title: "Sports Car",
    brand: "Porsche",
    year: 2023,
    price: 120000,
    isPremium: true,
  },
  {
    id: 4,
    title: "Electric Hatchback",
    brand: "Nissan",
    year: 2022,
    price: 35000,
    isPremium: false,
  },
  {
    id: 5,
    title: "Luxury SUV",
    brand: "BMW",
    year: 2023,
    price: 90000,
    isPremium: true,
  },
];

const Product = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [CheckPremium, setCheckPremium] = useState(false);

  const onChecker = () => {
    setCheckPremium(!CheckPremium);
  };
  return (
    <div className="mx-auto p-10">
      <Header />
      <Searce
        CheckPremium={CheckPremium}
        onChecker={onChecker}
        searchTerm={searchTerm}
        onSearchProduct={setSearchTerm}
      />
      <Productlist
        CheckPremium={CheckPremium}
        searchTerm={searchTerm}
        items={PRODUCTS}
      />
    </div>
  );
};

export default Product;

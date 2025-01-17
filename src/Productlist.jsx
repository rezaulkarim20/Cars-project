import ProductCart from "./ProductCart";

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

function Productlist() {
  return (
    <ul className="grid grid-cols-3 gap-5  mt-2 ">
      {PRODUCTS.map((item) => (
        <li
          className="w-auto bg-white shadow  mt-2 p-4 rounded-md  "
          key={item.id}
        >
          <ProductCart item={item} />
        </li>
      ))}
    </ul>
  );
}

export default Productlist;

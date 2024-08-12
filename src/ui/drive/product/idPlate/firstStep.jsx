import {
  faBone,
  faCircle,
  faShieldCat,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FirstStep({ input, setInput, data }) {
  const products = [
    { text: "Gato", trad: "cat", icon: faShieldCat },
    { text: "Hueso", trad: "bone", icon: faBone },
    {
      text: "Redondas",
      trad: "rounded",
      icon: faCircle,
    },
    { text: "Tag", trad: "tag", icon: faTag },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    const { title } = e.target;
    setInput((prevState) => ({
      ...prevState,
      product: { product: prevState.product.product, firstStep: title },
    }));
  };
  return (
    <section className="flex flex-wrap justify-center my-2">
      {products.map((product, k) => {
        return (
          <p
            key={k}
            title={product.trad}
            onClick={(e) => handleClick(e)}
            className="m-6 w-28 h-28 rounded-2xl text-2xl flex justify-center items-cente transparent"
          >
            <FontAwesomeIcon
              icon={product.icon}
              className={`${
                product.trad === input.product.firstStep
                  ? "bg-petsBlue"
                  : "bg-gray-100"
              } ${
                !input.product.firstStep
                  ? "shadow-lg"
                  : product.trad === input.product.firstStep
                  ? "shadow-lg"
                  : ""
              } w-16 h-16 p-9 rounded-full -z-10`}
            />
          </p>
        );
      })}
    </section>
  );
}

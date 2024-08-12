export default function FirstStep({ input, setInput, data }) {
  const products = [
    { text: "Gato", trad: "cat" },
    { text: "Hueso", trad: "bone" },
    { text: "Redondas", trad: "rounded" },
    { text: "Tag", trad: "tag" },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      product: { product: prevState.product.product, firstStep: value },
    }));
  };
  return (
    <section className="flex flex-col justify-around my-9">
      {products.map((product, k) => {
        return (
          <option
            key={k}
            value={product.trad}
            onClick={(e) => handleClick(e)}
            className={`${
              product.trad === input.product.firstStep
                ? "bg-petsBlue"
                : "bg-gray-100"
            } ${
              product.trad === input.product.firstStep
                ? "shadow-lg"
                : input.secondStep == product.trad
                ? "shadow-lg"
                : ""
            } my-2 w-full h-20 rounded-2xl text-2xl flex justify-center items-center`}
            // className={`${
            //   product.trad === input.product.firstStep
            //     ? "bg-white shadow-inner"
            //     : "bg-gray-100 shadow"
            // } text-2xl my-1 py-3 flex justify-center rounded-lg`}
          >
            {product.text}
          </option>
        );
      })}
    </section>
  );
}

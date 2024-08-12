export default function FirstStep({ input, setInput, data }) {
  const products = [
    { text: "Gato", trad: "cat" },
    { text: "Hueso", trad: "bone" },
    { text: "Redondas", trad: "round" },
    { text: "Tag", trad: "tag" },
  ];

  const handleClick = (e) => {
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
                ? "bg-white shadow-inner"
                : "bg-gray-100 shadow"
            } text-2xl my-1 py-3 flex justify-center rounded-lg`}
          >
            {product.text}
          </option>
        );
      })}
    </section>
  );
}

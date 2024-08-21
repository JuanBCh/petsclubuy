export default function CatSixthStep({ input, setInput, data }) {
  const { plateColors, plateColorsHEX } = data;

  const handleClick = (e) => {
    e.preventDefault();
    const { innerText } = e.target;
    setInput((prevState) => ({
      ...prevState,
      product: { ...prevState.product, sixthStep: innerText },
    }));
  };

  return (
    <section className="flex flex-col justify-around my-9">
      {plateColors.map((color, k) => {
        return (
          <p
            key={k}
            onClick={(e) => handleClick(e)}
            className="text-white text-2xl my-1 py-3 flex justify-center rounded-lg"
            style={{
              backgroundColor: !input.product.sixthStep
                ? plateColorsHEX[k]
                : input.product.sixthStep == color
                ? plateColorsHEX[k]
                : "gray",
            }}
          >
            {color}
          </p>
        );
      })}
    </section>
  );
}

export default function CatFourthStep({ input, setInput, data }) {
  const { colors, colorsHEX } = data;

  const handleClick = (e) => {
    e.preventDefault();
    const { innerText } = e.target;
    setInput((prevState) => ({
      ...prevState,
      product: { ...prevState.product, fourthStep: innerText },
    }));
  };

  return (
    <section className="flex flex-col justify-around my-9">
      {colors.map((color, k) => {
        return (
          <p
            key={k}
            onClick={(e) => handleClick(e)}
            className="text-white text-2xl my-1 py-3 flex justify-center rounded-lg"
            style={{
              backgroundColor: !input.product.fourthStep
                ? colorsHEX[k]
                : input.product.fourthStep == color
                ? colorsHEX[k]
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

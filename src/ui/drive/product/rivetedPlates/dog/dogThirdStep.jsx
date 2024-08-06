export default function DogThirdStep({ input, setInput, data }) {
  const { colors, colorsHEX } = data;

  const handleClick = (e) => {
    e.preventDefault();
    const { innerText } = e.target;
    setInput((prevState) => ({
      ...prevState,
      product: { ...prevState.product, thirdStep: innerText },
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
              backgroundColor: !input.product.thirdStep
                ? colorsHEX[k]
                : input.product.thirdStep == color
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

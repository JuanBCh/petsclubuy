export default function ColorChooser({
  input,
  setInput,
  colors,
  colorsHEX,
  step,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    const { innerText } = e.target;
    setInput((prevState) => ({
      ...prevState,
      product: { ...prevState.product, [step]: innerText },
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
              backgroundColor: !input.product[step]
                ? colorsHEX[k]
                : input.product[step] == color
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

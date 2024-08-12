export default function RoundedThirdStep({ input, setInput, data }) {
  const { faces } = data;

  const handleClick = (e) => {
    e.preventDefault();
    const { innerText } = e.target;
    setInput((prevState) => ({
      ...prevState,
      product: { ...prevState.product, thirdStep: innerText },
    }));
  };

  return (
    <section className="flex flex-wrap justify-around my-9">
      {faces.map((size, k) => {
        return (
          <p
            key={k}
            onClick={(e) => handleClick(e)}
            className={`${
              input.product.thirdStep == size ? "bg-petsBlue" : "bg-gray-100"
            } ${
              !input.product.thirdStep
                ? "shadow-lg"
                : input.thirdStep == size
                ? "shadow-lg"
                : ""
            } w-36 h-20 rounded-2xl text-2xl flex justify-center items-center`}
          >
            {size}
          </p>
        );
      })}
    </section>
  );
}

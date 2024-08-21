export default function CatSecondStep({ input, setInput, data }) {
  const { models } = data;

  const handleClick = (e) => {
    e.preventDefault();
    const { innerText } = e.target;
    setInput((prevState) => ({
      ...prevState,
      product: { ...prevState.product, secondStep: innerText },
    }));
  };

  return (
    <section className="flex flex-wrap justify-around my-9">
      {models.map((model, k) => {
        return (
          <p
            key={k}
            onClick={(e) => handleClick(e)}
            className={`${
              input.product.secondStep == model ? "bg-petsBlue" : "bg-gray-100"
            } ${
              !input.product.secondStep
                ? "shadow-lg"
                : input.secondStep == model
                ? "shadow-lg"
                : ""
            } m-2 w-20 h-20 rounded-2xl text-2xl flex justify-center items-center`}
          >
            {model}
          </p>
        );
      })}
    </section>
  );
}

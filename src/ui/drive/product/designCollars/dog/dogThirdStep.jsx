export default function DogThirdStep({ input, setInput, data }) {
  const { designs } = data;

  const handleClick = (e) => {
    e.preventDefault();
    const { innerText } = e.target;
    setInput((prevState) => ({
      ...prevState,
      product: { ...prevState.product, thirdStep: innerText },
    }));
  };

  return (
    <section className="flex flex-wrap justify-between my-9">
      {designs.map((design, k) => {
        return (
          <p
            key={k}
            onClick={(e) => handleClick(e)}
            className={`${
              design === input.product.thirdStep ? "bg-petsBlue" : "bg-gray-100"
            } ${
              !input.product.firstStep
                ? "shadow-lg"
                : design === input.product.thirdStep
                ? "shadow-lg"
                : ""
            } w-full h-16 m-1 rounded-lg flex justify-center items-center`}
          >
            {design}
          </p>
        );
      })}
    </section>
  );
}

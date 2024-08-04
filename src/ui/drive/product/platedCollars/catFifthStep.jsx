export default function CatFifthStep({ input, setInput, data }) {
  const { ages } = data;

  const handleClick = (e) => {
    e.preventDefault();
    const { innerText } = e.target;
    setInput((prevState) => ({
      ...prevState,
      product: { ...prevState.product, fifthStep: innerText },
    }));
  };

  return (
    <section className="flex flex-wrap justify-around my-9">
      {ages.map((age, k) => {
        return (
          <p
            key={k}
            onClick={(e) => handleClick(e)}
            className={`${
              input.product.fifthStep == age ? "bg-petsBlue" : "bg-gray-100"
            } ${
              !input.product.fifthStep
                ? "shadow-lg"
                : input.fifthStep == age
                ? "shadow-lg"
                : ""
            } m-2 w-32 h-32 rounded-2xl text-2xl flex justify-center items-center`}
          >
            {age}
          </p>
        );
      })}
    </section>
  );
}

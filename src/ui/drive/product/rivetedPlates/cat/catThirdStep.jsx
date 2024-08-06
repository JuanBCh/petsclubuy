import Image from "next/image";

export default function CatThirdStep({ input, setInput, data }) {
  const { buckles } = data;
  const handleClick = (e) => {
    e.preventDefault();
    const { name } = e.target;
    setInput((prevState) => ({
      ...prevState,
      product: { ...prevState.product, thirdStep: name },
    }));
  };

  return (
    <section className="flex justify-around my-9">
      {buckles.map((buc, k) => {
        return (
          <Image
            src={`/buckles/${
              !input.product.thirdStep
                ? buc
                : input.product.thirdStep === buc
                ? buc
                : buc + "_bw"
            }.jpeg`}
            alt={buc}
            width={50}
            height={50}
            name={buc}
            onClick={(e) => handleClick(e)}
            className={`${
              !input.product.thirdStep
                ? "shadow-lg"
                : input.product.thirdStep === buc
                ? "shadow-lg filter"
                : ""
            } w-2/5 bg-gray-800 rounded-full inline-flex items-center justify-center hover:pointer`}
          />
        );
      })}
    </section>
  );
}

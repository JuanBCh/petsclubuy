"use client";

export default function SecondStep({ input, setInput }) {
  const sizes = ["XS", "S", "M", "L", "XL", "..."];

  const handleClick = (e) => {
    const { innerText } = e.target;
    setInput({ ...input, secondStep: innerText });
  };
  return (
    <section className="flex flex-wrap justify-around my-9">
      {sizes.map((size, k) => {
        return (
          <p
            key={k}
            onClick={(e) => handleClick(e)}
            className={`${
              input.secondStep == size ? "bg-petsBlue" : "bg-gray-100"
            } m-2 w-20 h-20 rounded-2xl text-2xl flex justify-center items-center shadow-lg`}
          >
            {size}
          </p>
        );
      })}
    </section>
  );
}

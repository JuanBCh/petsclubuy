"use client";

import Image from "next/image";
import { useState } from "react";

export default function FirstStep({ input, setInput }) {
  const [imgs, setImgs] = useState({
    dog: "/buttons/dog.jpeg",
    cat: "/buttons/cat.jpeg",
  });

  const handleClick = (e) => {
    e.preventDefault();
    const { name } = e.target;

    input.product.product.firstStep !== name &&
      setInput((prevState) => ({
        ...prevState,
        product: { product: "Chapita identificadora", firstStep: name },
      }));
    setImgs({
      dog: name === "dog" ? "/buttons/dog.jpeg" : "/buttons/dog_bw.jpeg",
      cat: name === "cat" ? "/buttons/cat.jpeg" : "/buttons/cat_bw.jpeg",
    });
  };

  return (
    <section className="flex justify-around my-9">
      <Image
        src={imgs.dog}
        alt="dog"
        width={50}
        height={50}
        name="dog"
        onClick={(e) => handleClick(e)}
        className={`${
          imgs.dog === "/buttons/dog.jpeg" ? "shadow-lg" : ""
        } w-2/5 bg-gray-800 rounded-lg inline-flex items-center justify-center hover:pointer`}
      />
      <Image
        src={imgs.cat}
        alt="cat"
        width={50}
        height={50}
        name="cat"
        onClick={(e) => handleClick(e)}
        className={`${
          imgs.cat === "/buttons/cat.jpeg" ? "shadow-lg" : ""
        } w-2/5 bg-gray-800 rounded-lg inline-flex items-center justify-center hover:pointer`}
      />
    </section>
  );
}

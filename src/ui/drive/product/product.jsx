"use client";

import { useState } from "react";
import RivetedPlates from "./rivetedPlates/form";
import IdPlates from "./idPlate/form";
import DesignCollars from "./designCollars/form";
import Plates from "./plate/form";

export default function Product({ input, setInput, drive }) {
  const [productsInput, setProductsInput] = useState({
    product: {
      product: "",
      riveted: false,
    },
  });

  const createOrder = (e) => {
    e.preventDefault();
    const finalInput = productsInput.product;
    setInput((prevState) => ({
      ...prevState,
      products: Array.isArray(prevState.products)
        ? [...prevState.products, finalInput]
        : [finalInput],
    }));
    setProductsInput({ product: { product: "" } });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log(input);
  };

  const productsComponents = {
    "Chapita identificadora": (
      <IdPlates
        input={productsInput}
        setInput={setProductsInput}
        data={drive.options["Chapita identificadora"]}
      />
    ),
    "Collar con Chapita": (
      <RivetedPlates
        input={productsInput}
        setInput={setProductsInput}
        data={drive.options["Collar con Chapita"]}
      />
    ),
    "Collares Básicos": (
      <RivetedPlates
        input={productsInput}
        setInput={setProductsInput}
        data={drive.options["Collares Básicos"]}
      />
    ),
    "Collares con Diseño": (
      <DesignCollars
        input={productsInput}
        setInput={setProductsInput}
        data={drive.options["Collares con Diseño"]}
      />
    ),
  };

  const handleClick = (e) => {
    const { value } = e.target;

    productsInput.product.product !== value &&
      setProductsInput({ product: { product: value } });
  };

  return (
    <label name="product" className="text-xl">
      <p className="font-semibold mb-2">Producto</p>
      <input type="hidden" name="product" />
      <Plates input={productsInput} setInput={setProductsInput} />
      <select
        defaultValue=""
        onClick={(e) => handleClick(e)}
        className="w-full h-12 border rounded-lg px-1 shadow"
      >
        <option value="" disabled>
          Producto
        </option>
        {drive.products.map((product, k) => {
          return (
            <option key={k} value={product}>
              {product}
            </option>
          );
        })}
      </select>
      {productsComponents[productsInput.product.product]}
      {productsInput.product.firstStep && (
        <button
          onClick={(e) => createOrder(e)}
          className="w-full my-16 h-20 bg-petsViolet text-white text-3xl font-semibold my-1 py-3 shadow-xl flex justify-center items-center rounded-lg"
        >
          Agregar Producto
        </button>
      )}
    </label>
  );
}

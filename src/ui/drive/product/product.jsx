"use client";

import { useState } from "react";
import RivetedPlates from "./rivetedPlates/form";
import IdPlates from "./idPlate/form";
import DesignCollars from "./designCollars/form";

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
    const { value, checked } = e.target;
    if (checked !== undefined) {
      console.log(checked);
      setInput((prevState) => ({
        ...prevState,
        product: {
          ...prevState.product,
          riveted: checked,
        },
      }));
    } else {
      productsInput.product.product !== value &&
        setProductsInput({ product: { product: value } });
    }
    console.log(productsInput);
  };

  return (
    <label name="product" className="text-xl">
      <p className="font-semibold mb-2">Producto</p>
      <input type="hidden" name="product" />
      <label
        name="check"
        className="w-full p-2 my-4 border rounded-lg shadow flex items-center justify-between text-xl"
      >
        <p className="font-semibold">Chapita remachada</p>
        <input
          onClick={(e) => handleClick(e)}
          type="checkbox"
          name="check"
          className="h-9 w-9 shadow"
        />
      </label>
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

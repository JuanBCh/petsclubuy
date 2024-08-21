"use client";

import { useState } from "react";
import RivetedPlates from "./collars/rivetedPlates/form";
import IdPlates from "./collars/idPlate/form";
import DesignCollars from "./collars/designCollars/form";
import DataPlate from "./dataPlate/form";
import ProductSelects from "./productSelects";
import AdidogHoodies from "./chests/adidogHoodies/form";
import FullChest from "./chests/fullChest/form";

export default function Product({ input, setInput, drive }) {
  const [productsInput, setProductsInput] = useState({
    product: {
      product: "",
      riveted: {
        checked: false,
      },
    },
  });

  const createOrder = (e) => {
    e.preventDefault();
    const finalInput = productsInput.product;
    console.log(finalInput);
    setInput((prevState) => ({
      ...prevState,
      products: Array.isArray(prevState.products)
        ? [...prevState.products, finalInput]
        : [finalInput],
    }));
    setProductsInput({ product: { product: "", riveted: false } });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const collars = {
    "Chapita identificadora": (
      <IdPlates
        input={productsInput}
        setInput={setProductsInput}
        data={drive.options["Chapita identificadora"]}
      />
    ),
    // "Collar con Chapita": (
    //   <RivetedPlates
    //     input={productsInput}
    //     setInput={setProductsInput}
    //     data={drive.options["Collar con Chapita"]}
    //   />
    // ),
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

  const chests = {
    "Capita Hoodie Adidog": (
      <AdidogHoodies
        input={productsInput}
        setInput={setProductsInput}
        data={drive.options["Capita Hoodie Adidog"]}
      />
    ),
    Pechera: (
      <FullChest
        input={productsInput}
        setInput={setProductsInput}
        data={drive.options["Pechera"]}
      />
    ),
  };

  return (
    <label name="product" className="text-xl">
      <p className="font-semibold mb-2">Producto</p>
      <input type="hidden" name="product" />
      <DataPlate input={productsInput} setInput={setProductsInput} />
      <ProductSelects
        input={productsInput}
        setInput={setProductsInput}
        drive={drive}
      />
      {collars[productsInput.product.product]}
      {chests[productsInput.product.product]}
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

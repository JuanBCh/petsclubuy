"use client";

import { useState } from "react";
import RivetedPlates from "./platedCollars/form";

export default function Product({ input, setInput, drive }) {
  const [productsInput, setProductsInput] = useState({
    product: {
      product: "",
    },
  });
  const productsComponents = {
    "Chapita remachada": (
      <RivetedPlates
        product="Chapita remachada"
        input={productsInput}
        setInput={setProductsInput}
        data={drive.options}
      />
    ),
  };

  const handleClick = (e) => {
    const { value } = e.target;
    productsInput.product.product !== value &&
      setProductsInput({ ...productsInput, product: { product: value } });
  };

  return (
    <label name="product" className="text-xl">
      <p className="font-semibold mb-2">Producto</p>
      <input type="hidden" name="product" />
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
    </label>
  );
}

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
        input={productsInput}
        setInput={setProductsInput}
        data={drive}
      />
    ),
  };

  const handleClick = (e) => {
    const { value } = e.target;
    productsInput.product.product !== value &&
      setProductsInput({ ...productsInput, product: { product: value } });
  };

  return (
    <label name="product">
      Producto
      <input type="hidden" name="product" />
      <select defaultValue="" onClick={(e) => handleClick(e)}>
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

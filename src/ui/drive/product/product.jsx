"use client";

import { useState } from "react";
import FirstStep from "./firstStep";
import SecondStep from "./secondStep";
import ThirdStep from "./thirdStep";

export default function Product() {
  const [input, setInput] = useState({
    firstStep: "",
    secondStep: "",
    thirdStep: "",
  });
  return (
    <label name="product">
      Producto
      <input type="hidden" name="product" />
      <FirstStep input={input} setInput={setInput} />
      {input.firstStep && <SecondStep input={input} setInput={setInput} />}
      {input.secondStep && <ThirdStep input={input} setInput={setInput} />}
    </label>
  );
}

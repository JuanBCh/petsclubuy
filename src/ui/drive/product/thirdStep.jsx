"use client";

import { drive } from "@/lib/data.json";

export default function ThirdStep({ input, setInput }) {
  const { colors, colorsHEX } = drive;

  const handleClick = (e) => {
    const { innerText } = e.target;
    setInput({ ...input, thirdStep: innerText });
  };

  return (
    <section className="flex flex-col justify-around my-9">
      {colors.map((color, k) => {
        return (
          <p
            key={k}
            onClick={(e) => handleClick(e)}
            className="text-white text-2xl my-1 py-3 flex justify-center rounded-lg"
            style={{
              backgroundColor: !input.thirdStep
                ? colorsHEX[k]
                : input.thirdStep == color
                ? colorsHEX[k]
                : "gray",
            }}
          >
            {color}
          </p>
        );
      })}
    </section>
  );
}

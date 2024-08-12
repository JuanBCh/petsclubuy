import ColorChooser from "@/utils/colorChooser";

export default function CatSecondStep({ input, setInput, data }) {
  const { colors, colorsHEX } = data;

  return (
    <ColorChooser
      input={input}
      setInput={setInput}
      colors={colors}
      colorsHEX={colorsHEX}
      step="secondStep"
    />
  );
}

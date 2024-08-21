import ColorChooser from "@/utils/products/colorChooser";

export default function CatSecondStep({ input, setInput, data }) {
  return (
    <ColorChooser
      input={input}
      setInput={setInput}
      data={data}
      step="secondStep"
    />
  );
}

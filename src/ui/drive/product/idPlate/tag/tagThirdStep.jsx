import ColorChooser from "@/utils/colorChooser";

export default function TagThirdStep({ input, setInput, data }) {
  return (
    <ColorChooser
      input={input}
      setInput={setInput}
      data={data}
      step="thirdStep"
    />
  );
}

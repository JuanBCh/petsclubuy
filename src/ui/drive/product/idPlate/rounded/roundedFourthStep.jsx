import ColorChooser from "@/utils/colorChooser";

export default function RoundedFourthStep({ input, setInput, data }) {
  return (
    <ColorChooser
      input={input}
      setInput={setInput}
      data={data}
      step="fourthStep"
    />
  );
}

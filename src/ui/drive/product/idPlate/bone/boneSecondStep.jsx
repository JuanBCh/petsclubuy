import ColorChooser from "@/utils/colorChooser";

export default function BoneSecondStep({ input, setInput, data }) {
  return (
    <ColorChooser
      input={input}
      setInput={setInput}
      data={data}
      step="secondStep"
    />
  );
}

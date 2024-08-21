import FirstStep from "./firstStep";
import SecondStep from "./secondStep";

export default function DataPlate({ input, setInput }) {
  return (
    <>
      <FirstStep setInput={setInput} />
      {input.product.riveted.checked && <SecondStep setInput={setInput} />}
    </>
  );
}

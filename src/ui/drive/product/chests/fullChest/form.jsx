import FirstSetp from "./firstStep";
import FullChestSecondStep from "./secondStep";

export default function FullChest({ input, setInput, data }) {
  return (
    <>
      <FirstSetp input={input} setInput={setInput} data={data} />
      {input.product.firstStep && (
        <FullChestSecondStep input={input} setInput={setInput} data={data} />
      )}
    </>
  );
}

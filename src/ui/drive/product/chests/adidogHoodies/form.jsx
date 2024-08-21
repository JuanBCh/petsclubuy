import FirstSetp from "./firstStep";
import HoodiesSecondStep from "./secondStep";

export default function AdidogHoodies({ input, setInput, data }) {
  console.log(input);
  return (
    <>
      <FirstSetp input={input} setInput={setInput} data={data} />
      {input.product.firstStep && (
        <HoodiesSecondStep input={input} setInput={setInput} data={data} />
      )}
    </>
  );
}

import FirstStep from "../rivetedPlates/firstStep";
import CatSecondStep from "./cat/catSecondStep";
import DogSecondStep from "./dog/dogSecondStep";
import DogThirdStep from "./dog/dogThirdStep";

export default function DesignCollars({ input, setInput, data }) {
  return (
    <>
      <FirstStep input={input} setInput={setInput} data={data} />
      {input.product.firstStep == "dog" && (
        <>
          <DogSecondStep input={input} setInput={setInput} data={data.dog} />
          {input.product.secondStep && (
            <DogThirdStep input={input} setInput={setInput} data={data.dog} />
          )}
        </>
      )}
      {input.product.firstStep == "cat" && (
        <CatSecondStep input={input} setInput={setInput} data={data.cat} />
      )}
    </>
  );
}

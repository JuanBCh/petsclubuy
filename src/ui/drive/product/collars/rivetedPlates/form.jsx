import FirstStep from "./firstStep";
import DogSecondStep from "./dog/dogSecondStep";
import DogThirdStep from "./dog/dogThirdStep";
import CatSecondStep from "./cat/catSecondStep";
import CatThirdStep from "./cat/catThirdStep";
import CatFourthStep from "./cat/catFourthStep";
import CatFifthStep from "./cat/catFifthStep";
import CatSixthStep from "./cat/catSixthStep";

export default function RivetedPlates({ input, setInput, data }) {
  return (
    <>
      <FirstStep input={input} setInput={setInput} />
      {input.product.firstStep == "dog" && (
        <>
          <DogSecondStep input={input} setInput={setInput} data={data.dog} />
          {input.product.secondStep && (
            <DogThirdStep input={input} setInput={setInput} data={data.dog} />
          )}
        </>
      )}
      {input.product.firstStep == "cat" && (
        <>
          <CatSecondStep input={input} setInput={setInput} data={data.cat} />
          {input.product.secondStep && (
            <CatThirdStep input={input} setInput={setInput} data={data.cat} />
          )}
          {input.product.thirdStep && (
            <CatFourthStep input={input} setInput={setInput} data={data.cat} />
          )}
          {input.product.fourthStep && (
            <CatFifthStep input={input} setInput={setInput} data={data.cat} />
          )}
          {input.product.fifthStep && (
            <CatSixthStep input={input} setInput={setInput} data={data.cat} />
          )}
        </>
      )}
    </>
  );
}

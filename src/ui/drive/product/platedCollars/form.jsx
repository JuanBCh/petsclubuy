import FirstStep from "./firstStep";
import DogSecondStep from "./dogSecondStep";
import DogThirdStep from "./dogThirdStep";
import CatSecondStep from "./catSecondStep";
import CatThirdStep from "./catThirdStep";
import CatFourthStep from "./catFourthStep";
import CatFifthStep from "./catFifthStep";
import CatSixthStep from "./catSixthStep";

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

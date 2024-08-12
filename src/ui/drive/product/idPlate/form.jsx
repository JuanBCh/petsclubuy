import BoneSecondStep from "./bone/boneSecondStep";
import CatSecondStep from "./cat/catSecondStep";
import FirstStep from "./firstStep";
import RoundedSecondStep from "./rounded/roundedSecondStep";
import RoundedThirdStep from "./rounded/roundedThirdStep";
import RoundedFourthStep from "./rounded/roundedFourthStep";

export default function IdPlates({ input, setInput, data }) {
  return (
    <>
      <FirstStep input={input} setInput={setInput} data={data} />
      {input.product.firstStep == "cat" && (
        <CatSecondStep input={input} setInput={setInput} data={data.cat} />
      )}
      {input.product.firstStep == "bone" && (
        <BoneSecondStep input={input} setInput={setInput} data={data.bone} />
      )}
      {input.product.firstStep == "rounded" && (
        <>
          <RoundedSecondStep
            input={input}
            setInput={setInput}
            data={data.rounded}
          />
          {input.product.secondStep && (
            <RoundedThirdStep
              input={input}
              setInput={setInput}
              data={data.rounded}
            />
          )}
          {input.product.thirdStep && (
            <RoundedFourthStep
              input={input}
              setInput={setInput}
              data={data.rounded}
            />
          )}
        </>
      )}
      {/* <FirstStep input={input} setInput={setInput} />
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
        )} */}
    </>
  );
}

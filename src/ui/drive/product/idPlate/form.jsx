import FirstStep from "./firstStep";

export default function IdPlates({ input, setInput, data }) {
  return (
    <>
      <FirstStep input={input} setInput={setInput} data={data} />
      {/* <FirstStep input={input} setInput={setInput} />
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
        )} */}
    </>
  );
}

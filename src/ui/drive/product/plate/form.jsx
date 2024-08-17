import FirstStep from "./firstStep";

export default function Plates({ input, setInput }) {
  console.log(input);
  return (
    <>
      <FirstStep setInput={setInput} />
      {input.product.riveted && (
        <label name="riveted" className="text-xl">
          <p className="font-semibold mb-2">Nombre</p>
          <input
            type="text"
            name="riveted"
            className="w-full h-12 border rounded-lg px-1 shadow"
          />
        </label>
      )}
      {/* <FirstStep input={input} setInput={setInput} data={data} />
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
        {input.product.firstStep == "tag" && (
          <>
            <TagSecondStep input={input} setInput={setInput} data={data.tag} />
            {input.product.secondStep && (
              <TagThirdStep input={input} setInput={setInput} data={data.tag} />
            )}
          </>
        )} */}
    </>
  );
}

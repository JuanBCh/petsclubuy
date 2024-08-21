export default function ProductSelects({ input, setInput, drive }) {
  const handleClick = (e) => {
    const { value } = e.target;

    input.product.product !== value &&
      setInput({
        product: { product: value, riveted: input.product.riveted },
      });
  };
  console.log(input);
  return (
    <>
      <select
        defaultValue=""
        onClick={(e) => handleClick(e)}
        className="w-full p-2 mt-4 border rounded-lg shadow flex items-center justify-between text-xl"
      >
        <option value="" disabled>
          Collares
        </option>
        {drive.collars.map((product, k) => {
          return (
            <option key={k} value={product}>
              {product}
            </option>
          );
        })}
      </select>
      <select
        defaultValue=""
        onClick={(e) => handleClick(e)}
        className="w-full p-2 mt-4 border rounded-lg shadow flex items-center justify-between text-xl"
      >
        <option value="" disabled>
          Pecheras y Hoodies
        </option>
        {drive.chests.map((product, k) => {
          return (
            <option key={k} value={product}>
              {product}
            </option>
          );
        })}
      </select>
      {input.product.product && (
        <p className="w-full text-2xl font-semibold text-center my-4">
          {input.product.product}
        </p>
      )}
    </>
  );
}

export default function FirstStep({ setInput }) {
  const handleClick = (e) => {
    const { checked } = e.target;
    if (checked === true || checked === false) {
      setInput((prevState) => ({
        ...prevState,
        product: {
          ...prevState.product,
          riveted: checked,
        },
      }));
    }
  };
  return (
    <label
      name="check"
      className="w-full p-2 my-4 border rounded-lg shadow flex items-center justify-between text-xl"
    >
      <p className="font-semibold">Chapita remachada</p>
      <input
        onClick={(e) => handleClick(e)}
        type="checkbox"
        name="check"
        className="h-9 w-9 shadow"
      />
    </label>
  );
}

export default function SecondStep({ setInput }) {
  const handleClick = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      product: {
        ...prevState.product,
        riveted: {
          ...prevState.product.riveted,
          [name]: value,
        },
      },
    }));
  };

  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        onChange={(e) => handleClick(e)}
        className="w-full h-12 border rounded-lg px-1 shadow"
      />
      <input
        type="text"
        name="data"
        placeholder="Datos"
        onChange={(e) => handleClick(e)}
        className="w-full h-12 border rounded-lg px-1 shadow"
      />
    </>
  );
}

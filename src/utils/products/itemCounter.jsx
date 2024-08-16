export default function ItemCounter({ input }) {
  return (
    <>
      {input.products.map((product, k) => {
        return (
          <p
            key={k}
            className="w-full min-h-16 border px-1 py-2 flex items-center"
          >
            {product.product} {product.firstStep}{" "}
            {product.secondStep && product.secondStep}{" "}
            {product.thirdStep && product.thirdStep}{" "}
            {product.fourthStep && product.fourthStep}{" "}
            {product.fifthStep && product.fifthStep}{" "}
            {product.sixthStep && product.sixthStep}{" "}
          </p>
        );
      })}
    </>
  );
}

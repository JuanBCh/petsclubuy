export default function ImageCheckbox({ name, image, className }) {
  return (
    <div
      className={`${className} w-full h-full`}
      style={{
        backgroundImage: image,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <input
        type="checkbox"
        name={name}
        className={"opacity-0 w-full h-full"}
      />
    </div>
  );
}

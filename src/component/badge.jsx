export default function Badge({ text, position, color, placeholder }) {
  const variant = {
    positions: {
      topLeft: "top-0 left-0",
      topright: "top-0 left-0",
    },
    colors: {
      blue: "bg-blue-500 text-white",
    },
  };

  return placeholder ? (
    <></>
  ) : (
    <span
      className={`absolute rounded-sm px-2 font-bold ${variant.positions[position]} ${variant.colors[color]}`}
    >
      {text}
    </span>
  );
}

export default function Icon({
  name,
  fill,
  mask,
  size = "normal",
  color = "black",
}) {
  const pattern = {
    home: [
      "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
    ],
    tv: [
      "M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z",
    ],
    fire: [
      "M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z",
      "M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z",
    ],
    tag: [
      "M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z",
      "M6 6h.008v.008H6V6Z",
    ],
    calendar: [
      "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    ],
    filter: [
      "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75",
    ],
    search: ["M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"],
    arrowLeft: ["M15.75 19.5 8.25 12l7.5-7.5"],
    arrowRight: ["m8.25 4.5 7.5 7.5-7.5 7.5"],
    email: [
      "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207",
    ],
    lock: [
      "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    ],
    star: [
      "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z",
    ],
    check: ["m4.5 12.75 6 6 9-13.5"],
  };

  const variant = {
    colors: {
      black: "text-black",
      white: "text-white",
      blue: "text-blue-600",
      gray: "text-gray-400",
      star: "text-star",
    },
    sizes: {
      medium: "size-1.5 sm:size-3 md:size-4 lg:size-4 xl:size-5",
      normal: "size-6",
    },
  };

  return (
    <svg
      fill={fill ? "currentColor" : "none"}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${variant.sizes[size]} ${variant.colors[color]} `}
    >
      <defs>
        <linearGradient id="half">
          <stop offset="50%" stopColor={"#facc15"} />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
      {pattern[name].map((data, index) => (
        <path
          key={index}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={mask == "true" && `url(#half)`}
          d={data}
        />
      ))}
    </svg>
  );
}

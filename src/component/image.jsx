import { useState } from "react";

export default function Image({ src, placeholder }) {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading || placeholder ? (
    <div className="placeholder h-19/20 w-11/12 bg-gray-300">
      <img
        className="invisible absolute"
        src={src}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  ) : (
    <img className="mx-auto" src={src} />
  );
}

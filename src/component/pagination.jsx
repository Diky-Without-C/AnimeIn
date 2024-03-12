import { useEffect } from "react";
import { useScrollTop } from "../services/utilities";
import Icon from "./icon";

function Button({ onClick, children }) {
  return (
    <button
      className="h-full w-10 rounded-lg bg-gray-300 p-2 hover:bg-gray-400"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function Pagination({ lastpage, setpage, page, contentRef }) {
  const placeholder = !lastpage;
  const scrollTop = useScrollTop(contentRef);

  function prevButton() {
    if (page > 1) {
      setpage((prev) => prev - 1);
      scrollTop();
    }
  }

  function nextButton() {
    if (page < lastpage) {
      setpage((prev) => prev + 1);
      scrollTop();
    }
  }

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="flex h-10 items-center gap-4">
      <Button onClick={prevButton}>
        <Icon name="arrowLeft" />
      </Button>
      <span className="flex h-full w-32 justify-center gap-1 rounded-lg bg-gray-300 p-2">
        {!placeholder && (
          <>
            Page
            <span className="font-bold">{page}</span>
            of
            <span className="font-bold">{lastpage}</span>
          </>
        )}
      </span>
      <Button onClick={nextButton}>
        <Icon name="arrowRight" />
      </Button>
    </div>
  );
}

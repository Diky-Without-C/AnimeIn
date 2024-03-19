import Icon from "./icon";

export default function Pagination({ lastpage, setpage, page }) {
  const placeholder = !lastpage;

  function prevButton() {
    if (page > 1) {
      setpage((prev) => prev - 1);
    }
  }

  function nextButton() {
    if (page < lastpage) {
      setpage((prev) => prev + 1);
    }
  }

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

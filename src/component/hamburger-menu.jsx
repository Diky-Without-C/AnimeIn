export default function HamburgerMenu({ isOpen, setIsOpen }) {
  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="ml-3 cursor-pointer" onClick={handleClick}>
      <div className="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden transition-all duration-200">
        <div
          className={`flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-500 ${
            isOpen && "-rotate-180"
          }`}
        >
          <span
            className={`h-[2px] w-7 -translate-x-1 transform bg-gray-700 transition-all duration-500 ${
              isOpen && "rotate-45"
            } `}
          ></span>
          <span className="h-[2px] w-7 transform rounded bg-gray-700 transition-all duration-500 "></span>
          <span
            className={`h-[2px] w-7 -translate-x-1 transform bg-gray-700 transition-all duration-500 ${
              isOpen && "-rotate-45"
            } `}
          ></span>
        </div>
      </div>
    </div>
  );
}

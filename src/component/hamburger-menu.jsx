export default function HamburgerMenu({ isChecked, setChecked }) {
  function handleChecked() {
    setChecked((prev) => !prev);
  }

  return (
    <div className="ml-3">
      <input
        className="absolute z-[1] m-[5px] h-[40px] w-[40px] cursor-pointer opacity-0"
        type="checkbox"
        onChange={handleChecked}
      />
      <div className="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden transition-all duration-200">
        <div
          className={`flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-500 ${
            isChecked && "-rotate-180"
          }`}
        >
          <span
            className={`h-[2px] w-7 -translate-x-1 transform bg-gray-700 transition-all duration-500 ${
              isChecked && "rotate-45"
            } `}
          ></span>
          <span className="h-[2px] w-7 transform rounded bg-gray-700 transition-all duration-500 "></span>
          <span
            className={`h-[2px] w-7 -translate-x-1 transform bg-gray-700 transition-all duration-500 ${
              isChecked && "-rotate-45"
            } `}
          ></span>
        </div>
      </div>
    </div>
  );
}

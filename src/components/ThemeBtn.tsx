import { useEffect, useState } from "react";

const ThemeBtn = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      if (!isChecked) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    const toggleDark = document.getElementById("toggleDark")!;
    toggleDark.addEventListener("click", handleClick);

    return () => {
      toggleDark.removeEventListener("click", handleClick);
    };
  }, [isChecked]);

  return (
    <div
      className={`fixed group left-0 top-24 sm:top-32 h-12 w-10 ${
        isChecked
          ? "bg-orange-500/25 hover:bg-orange-500"
          : "bg-blue-100 hover:bg-blue-900"
      } text-white rounded-r-full cursor-pointer hover:w-14 duration-200 flex justify-center items-center z-30`}
      onClick={() => setIsChecked(!isChecked)}
      id="toggleDark"
    >
      <i
        className={`fa-solid ${
          isChecked ? "fa-sun" : "fa-moon"
        } text-[22px]  duration-200`}
      ></i>
    </div>
  );
};

export default ThemeBtn;

// opacity-50 hover:opacity-100

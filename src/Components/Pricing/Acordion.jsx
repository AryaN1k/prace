import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Acordion = ({ title, ans }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-2 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full"
      >
        <span className="md:text-lg font-Lemon">{title}</span>
        {isOpen ? (
          <IoIosArrowUp className="text-xl" />
        ) : (
          <IoIosArrowDown className="text-xl" />
        )}
      </button>
      <div
        className={`grid transition-all duration-300 text-slate-600 ease-in-out overflow-hidden  ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 block"
            : "grid-rows-[0fr] opacity-0 hidden"
        }`}
      >
        <div className="overflow-hidden w-[80%] font-Lemon my-4"> {ans}</div>
      </div>
    </div>
  );
};

export default Acordion;

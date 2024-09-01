import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/home" },
  { name: "Pricing", path: "/pricing" },
  { name: "About Us", path: "/About Us" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
    console.log("click", open);
  };

  return (
    <section className="flex items-center justify-between min-w-screen py-7 ">
      <header className="container m-auto flex items-center justify-between w-full ">
        <div className="text-3xl flex mb-[5px] pl-5">
          <h1 className="font-semibold">Lando</h1>
        </div>
        <nav className="hidden lg:flex flex-1 gap-4 mx-auto ml-7 pl-7">
          {navItems.map((item, index) => (
            <li key={index} className="flex gap-3">
              <Link className="font-bolder" to={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </nav>
        <div className="flex gap-3 pr-4">
          <button className="">Login</button>
          <button className="bg-blue-600 border py-2 px-4 rounded-md text-white font-normal">
            SignUp
          </button>
        </div>
      </header>
      {/* Mobile Nav bar */}
      <div className="mr-7 lg:hidden">
        <RxHamburgerMenu
          className="text-xl cursor-pointer transition-all duration-500 ease-linear"
          onClick={toggle}
        />
        <ul
          className={`lg:hidden border absolute bg-[#EDEDED] w-60 left-0 top-24 h-full transition-all duration-500 ease-linear transform shadow-xl ${
            open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
          }`}
        >
          {navItems.map((item, index) => {
            return (
              <li key={index} className="mt-2 text-center border-b py-4 ">
                <Link className="font-bold text-xl " to={item.path}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Navbar;

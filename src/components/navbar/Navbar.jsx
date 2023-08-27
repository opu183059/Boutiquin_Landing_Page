import logo from "../../assets/images/logo.png";
import { FiSearch } from "react-icons/fi";
import { BiLockOpenAlt } from "react-icons/bi";
import { RiGroupLine } from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    { name: "home", link: "#" },
    { name: "about us", link: "#about" },
    { name: "product", link: "#product" },
    { name: "flash sales", link: "#" },
  ];

  return (
    <div>
      <div className="navbar max-w-6xl border-b-[2px] py-3 mx-auto flex justify-between items-center px-2 md:px-0 relative">
        <div className="logo flex items-center">
          <img src={logo} alt="logo" className="w-[45px]" />
          <h1 className="font-kaushan text-[25px]">Boutiquin</h1>
        </div>
        <div className="menu hidden md:block">
          <ul className="flex gap-4">
            {menu.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="uppercase font-poppins hover:text-pink-600   duration-150"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="right flex gap-3 cursor-pointer">
          <BiLockOpenAlt size={20}></BiLockOpenAlt>
          <RiGroupLine size={20}></RiGroupLine>
          <FiSearch size={20}></FiSearch>
          <button
            className="md:hidden"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? (
              <RxCross1 size={20}></RxCross1>
            ) : (
              <HiOutlineMenuAlt3 size={20}></HiOutlineMenuAlt3>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu  */}
      <div
        className={`mobileMenu absolute w-full overflow-hidden ${
          toggle ? `h-full` : `h-0`
        } bg-white duration-1000 flex justify-center items-center text-center z-50`}
      >
        <ul className=" text-xl">
          {menu.map((item) => (
            <li key={item.name} className="mb-8">
              <a
                href={item.link}
                className="uppercase font-poppins"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

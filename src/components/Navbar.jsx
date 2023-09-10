import { useEffect, useState } from "react";
import logo from "../../public/img/logo.svg";
import { BsBag } from "react-icons/bs";
import { useGlobalContext } from "./Context";
import { Link } from "react-router-dom";

function Navbar() {
  const { openSide, state } = useGlobalContext();

  const [Scroll, setScroll] = useState(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [Scroll]);
  return (
    <nav
      className={` fixed w-full ${
        Scroll > 60 && "fixed w-full z-30 bg-white shadow-light"
      }`}
    >
      <div
        className={`flex  container justify-between   h-12 items-center  rext-white`}
      >
        <Link to="/">
          <img className="w-6 h-6" src={logo} alt="..." />
        </Link>
        <div className="relative">
          <span className="cursor-pointer" onClick={openSide}>
            <BsBag size={20} />
          </span>
          <span className=" bg-red-600 absolute top-1/2 left-1/2 h-4 w-4 flex items-center justify-center rounded-full  text-[12px] text-white  ">
            {state.amount}
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

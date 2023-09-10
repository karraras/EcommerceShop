import { BsPlus } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { useState } from "react";
import { useGlobalContext } from "./Context";
import { Link } from "react-router-dom";

function ItemBox(prop) {
  const { addItem, View } = useGlobalContext();
  const { title, price, category, image, id } = prop;
  const [cursor, setCursor] = useState(false);

  return (
    <div
      onMouseOver={() => setCursor(true)}
      onMouseOut={() => setCursor(false)}
      className=" rounded overflow-hidden relative "
    >
      <div className="border border-solid p-4 border-gray-300 h-[200px] w-full flex justify-center items-center">
        <img
          className={`duration-300 h-[100px] ${
            cursor ? "scale-110" : "scale-100"
          }`}
          src={image}
          alt="..."
        />
      </div>
      <div>
        <p className="text-gray-500 text-[10px] my-1">{`${category}`}</p>
        <p className="font-semibold text-[12px]">{`${title}`}</p>
        <span className="font-semibold text-[12px]">{`$ ${price}`}</span>
      </div>

      <div
        className={`flex flex-col gap-2 duration-300 absolute top-3   ${
          cursor ? "right-3" : "-right-7 "
        } `}
      >
        <button
          onClick={() => addItem(id)}
          className="h-[25px] w-[25px]   shadow-light   cursor-pointer flex  bg-red-400 items-center justify-center text-white"
        >
          <BsPlus size={15} />
        </button>
        <Link onClick={() => View(id)} to="/SingleItem">
          <button className="h-[25px] w-[25px] shadow-light cursor-pointer flex bg-blue-400 items-center justify-center ">
            <AiFillEye size={15} />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ItemBox;

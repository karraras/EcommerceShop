import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

import { useGlobalContext } from "./Context";

function ItemShoping(prop) {
  const { View, Remove, Increase, Decrease } = useGlobalContext();
  const { title, price, image, amount, id, total0 } = prop;
  return (
    <div className="flex gap-2  text-[12px] border-b py-[10px] border-gray-200 border-solid">
      <div className="flex items-center justify-center">
        <img className="w-[50px]" src={image} alt="..." />
      </div>

      <div className="flex justify-between flex-1">
        <div className="flex flex-col justify-between w-[170px]">
          <Link onClick={() => View(id)} to="/SingleItem" className="uppercase">
            {`${title}`}{" "}
          </Link>
          <div className="flex justify-between">
            <div className="flex shadow-box">
              <button
                onClick={() => Decrease(id)}
                className="h-4 flex justify-center items-center w-4"
              >
                -
              </button>
              <span className="h-4  flex justify-center items-center w-4">
                {`${amount}`}
              </span>
              <button
                onClick={() => Increase(id)}
                className="h-4 flex justify-center items-center w-4"
              >
                +
              </button>
            </div>
            <span className="text-gray-400">{`${price}`}</span>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <button onClick={() => Remove(id)}>
            <IoMdClose />
          </button>
          <span>{`$ ${total0}`}</span>
        </div>
      </div>
    </div>
  );
}

export default ItemShoping;

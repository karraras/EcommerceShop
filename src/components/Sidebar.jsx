import { AiOutlineArrowRight } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import ItemShoping from "./ItemShoping";
function Sidebar() {
  const { closeSide, DeletAll, state } = useGlobalContext();
  return (
    <aside
      className={`fixed z-50 h-screen duration-300 top-0 bg-white w-80 shadow-side ${
        state.open ? "right-0" : "-right-full"
      }`}
    >
      <div className="p-3 h-full flex flex-col">
        <div className="flex justify-between border-b border-gray-200 border-solid p-2 text-[12px]">
          <p className="uppercase">
            Shopping bag <span>{`(${state.amount})`}</span>
          </p>
          <button onClick={closeSide} className="cursor-pointer">
            <AiOutlineArrowRight />
          </button>
        </div>
        <div className="flex-1 overflow-y-scroll">
          {state.shoping.map((item, index) => {
            return (
              <div key={index}>
                <ItemShoping {...item} />
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-2 pt-[15px] border-t border-gray-200 border-solid">
          <div className="flex justify-between text-[12px] ">
            <p className="uppercase">
              Total:
              <span>{` ${state.total}`}</span>
            </p>
            <button onClick={DeletAll} className="p-2 bg-red-400 text-white">
              <FaTrash size={10} />
            </button>
          </div>
          <button className="text-[12px] p-1 bg-gray-200">View cart</button>
          <button className="text-[12px] p-1 bg-slate-900 text-white">
            checkout
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

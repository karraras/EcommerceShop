import { useGlobalContext } from "./Context";

function SingleItem() {
  const { state, addItem } = useGlobalContext();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <section className="bg-white">
      <div
        key={state.View[0]?.id}
        className=" container h-screen  grid grid-cols-2"
      >
        <div className="flex justify-center items-center">
          <img className="w-[180px]" src={state.View[0]?.image} alt="..." />
        </div>
        <div className="flex  justify-center items-start flex-col">
          <p className="text-sm font-semibold">{`${state.View[0]?.title}`}</p>
          <span className="mt-2 text-red-500">{`$ ${state.View[0]?.price}`}</span>
          <p className="text-[12px] my-3">{`${state.View[0]?.description}`}</p>
          <button
            onClick={() => addItem(state?.View[0].id)}
            className="text-[12px] py-2 px-4 bg-black text-white font-semibold "
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default SingleItem;

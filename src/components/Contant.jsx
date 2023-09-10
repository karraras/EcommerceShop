import ItemBox from "./ItemBox";

import { useGlobalContext } from "./Context";
function Contant() {
  const { state } = useGlobalContext();
  return (
    <section>
      <div className="grid grid-cols-5 gap-4 container  my-10">
        {state.cart.slice(0, 10).map((item, index) => {
          return (
            <div key={index}>
              <ItemBox {...item} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Contant;

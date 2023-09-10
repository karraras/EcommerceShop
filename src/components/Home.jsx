import Contant from "./Contant";

import woman from "../../public/img/woman_hero.png";

function Home() {
  return (
    <>
      <section className="h-[450px] bg-hero  w-full bg-cover bg-center flex flex-col">
        <div className="container px-[60px] h-full flex justify-between">
          <div className="flex flex-col justify-center items-start ">
            <div className="flex gap-3 items-center">
              <span className="w-[10px] h-[1.5px] bg-red-500"></span>
              <p className="uppercase text-[12px]">NEW TREND</p>
            </div>
            <p className="uppercase text-4xl">
              autumn sale stylish <span className="font-bold block">women</span>{" "}
            </p>
            <button className="uppercase underline my-3 text-[10px] font-semibold ">
              Discover more
            </button>
          </div>
          <div className="items-end flex   justify-center ">
            <img src={woman} className="h-[350px] " alt="..." />
          </div>
        </div>
      </section>
      <Contant />
    </>
  );
}

export default Home;

import arrow from "../../../assets/icons/Arrow 1.svg";
import Cards from "./Components/Cards";
import NavBar from "./Components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="w-11/12 mx-auto mt-16  max-w-7xl flex flex-col items-center">
        <div className="text-center max-w-3xl">
          <h1 className="text-white text-4xl font-bold lg:text-7xl">
            <span> Minimize Your Tabs.</span>
            <span>Find The Trends!</span>
          </h1>

          <span className="text-gray-500 pt-5 font-medium text-sm lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            eros amet, imperdiet semper orci tincidunt.
          </span>
        </div>

        <div className="flex justify-center pt-11">
          <button className="rounded-[35px] bg-lime-400 px-9 py-4">
            <span className="text-lg font-semibold">Get Started</span>
          </button>
        </div>

        <div className="hidden md:block translate-x-52 -translate-y-16 font-caveat">
          <span className="text-white w-44 text-lg rotate-12 text-center">
            Start easy and free just this month
          </span>
          <img src={arrow.src} alt="" />
        </div>

        <Cards />
      </main>
    </>
  );
}

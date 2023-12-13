import Cards from "./Components/Cards";

export default function Startups() {
  return (
    <div className="bg-white pb-20 md:pb-40">
      <div className="w-11/12 mx-auto max-w-6xl">
        <div className="pt-24 md:pt-44">
          <h2 className="text-center text-gray-800 text-3xl font-bold lg:text-6xl">
            Findtrend make +1000 startup grow
          </h2>
        </div>

        <Cards />
      </div>
    </div>
  );
}

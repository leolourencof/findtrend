import image1 from "../../../assets/tweets/tweet 1.png";
import image2 from "../../../assets/tweets/tweet 2.png";
import image3 from "../../../assets/tweets/tweet 3.png";
import Cards from "./Components/Cards";

export default function Details() {
  return (
    <div className="bg-white">
      <div className="w-11/12 mx-auto pt-16 lg:pt-40">
        <div>
          <h2 className="text-center font-bold text-4xl lg:text-6xl">
            All platform connect to findtrend
          </h2>

          <Cards />

          <div className="flex flex-col gap-14 items-center pt-24 pb-32 lg:pt-36">
            <figure>
              <img src={image1.src} />
            </figure>

            <figure>
              <img src={image2.src} />
            </figure>

            <figure>
              <img src={image3.src} />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

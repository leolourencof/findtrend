import twitter from "../../../../assets/logos/Twitter - Original.svg";
import facebook from "../../../../assets/logos/Facebook - Original.svg";
import dribble from "../../../../assets/logos/Dribbble - Original.svg";
import pinterest from "../../../../assets/logos/Pinterest - Original.svg";
import exiticon from "../../../../assets/icons/Vector.svg";

const logos = [
  {
    id: 1,
    image: twitter,
    text: "Crytopunk - Search",
    style: "-rotate-6 md:rotate-6",
  },
  {
    id: 2,
    image: facebook,
    text: "Product design - Search",
    style: "-rotate-12 md:-rotate-6",
  },
  {
    id: 3,
    image: dribble,
    text: "Elon musk - Search",
    style: "rotate-3 -translate-y-4 min-[510px]:translate-y-5 md:translate-y-0",
  },
  {
    id: 4,
    image: pinterest,
    text: "Popular design - Search",
    style:
      "-rotate-6 -translate-y-4 min-[510px]:translate-y-5 md:translate-y-0",
  },
];

export default function Cards() {
  return (
    <div className="grid p-4 w-full mt-8 gap-5 md:grid-cols-2 md:grid-rows-2 mb-7 lg:mb-24">
      {logos.map((element) => (
        <div
          key={element.id}
          className={`bg-dark-gray flex items-center justify-between relative h-20 overflow-hidden ${element.style}`}
        >
          <div className="flex items-center w-full pl-5 gap-5">
            <figure className="pl-12">
              <img
                src={element.image.src}
                className="min-h-[48px] min-w-[48px]"
              />
            </figure>

            <span className="text-white text-lg font-medium whitespace-nowrap">
              {element.text}
            </span>
          </div>

          <button className="w-20 h-20 flex items-center justify-center bg-gradient-to-l from-dark-gray via-dark-gray to-opacity-gray absolute right-0">
            <img src={exiticon.src} />
          </button>
        </div>
      ))}
    </div>
  );
}

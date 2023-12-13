import flag from "../../../../assets/icons/Group 1 (1).svg";

const cards = [
  {
    id: 1,
    type: "Personal",
    description: "Special first packet for all",
    price: "$8",
    items: [
      "Up to 5 page each group",
      "Up to 10 page",
      "5 Days group page saved",
    ],
    bg: "bg-white",
    button: "bg-lime-400",
    text: "text-black",
  },
  {
    id: 2,
    type: "Regular",
    description: "Recommended for personal pro",
    price: "$20",
    items: [
      "Up to 15 page each group",
      "Download page up to 20",
      "Up to 10 group page",
      "15 Days group page saved",
    ],
    bg: "bg-lime-400",
    button: "bg-black",
    text: "text-white",
  },
  {
    id: 3,
    type: "Personal",
    description: "Special first packet for all",
    price: "$48",
    items: [
      "Up to 5 page each group",
      "Up to 10 page",
      "Up to 15 page each group",
      "Up to 10 group page",
      "5 Days group page saved",
    ],
    bg: "bg-white",
    button: "bg-lime-400",
    text: "text-black",
  },
];

export default function Cards() {
  return (
    <div className="pt-6 flex flex-col gap-10 lg:gap-7 lg:flex-row lg:justify-center items-center">
      {cards.map((element) => (
        <div
          key={element.id}
          className={`flex flex-col items-center rounded-3xl px-8 h-[530px] ${element.bg} justify-between min-w-min max-w-xs`}
        >
          <div>
            <div className="pb-4 pt-5 border-b-[1px] border-gray-400">
              <h3 className="font-bold text-3xl">{element.type}</h3>

              <span className="pt-2 text-base font-medium text-gray-500">
                {element.description}
              </span>
            </div>

            <div className="pt-6">
              <span className="text-6xl font-medium">
                {element.price} <span className="inline text-sm">/month</span>
              </span>

              <div className="flex flex-col gap-4 pt-3">
                {element.items.map((element, index) => (
                  <div className="flex gap-3" key={index}>
                    <img src={flag.src} />

                    <span className="text-lg">{element}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className={`px-16 py-4 mb-5 rounded-full ${element.button}`}>
            <span
              className={`text-lg font-medium whitespace-nowrap ${element.text}`}
            >
              Start free trial
            </span>
          </button>
        </div>
      ))}
    </div>
  );
}

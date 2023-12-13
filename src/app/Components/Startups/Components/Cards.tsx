import microsoft from "../../../../assets/images/image 116.png";
import airtable from "../../../../assets/images/image 117.png";
import algolia from "../../../../assets/images/image 118.png";
import volvo from "../../../../assets/images/image 119.png";
import carrera from "../../../../assets/images/image 120.png";
import upwork from "../../../../assets/images/image 121.png";
import verizon from "../../../../assets/images/image 122.png";
import bonanza from "../../../../assets/images/image 124.png";
import magento from "../../../../assets/images/image 126.png";
import suzuki from "../../../../assets/images/image 127.png";
import coinbase from "../../../../assets/images/image 133.png";
import wetransfer from "../../../../assets/images/image 132.png";
import allianz from "../../../../assets/images/image 128.png";
import expedia from "../../../../assets/images/image 129.png";
import heineken from "../../../../assets/images/image 130.png";

export default function Cards() {
  const startups = [
    {
      id: 1,
      logo: microsoft,
    },
    {
      id: 2,
      logo: airtable,
    },
    {
      id: 3,
      logo: algolia,
    },
    {
      id: 4,
      logo: volvo,
    },
    {
      id: 5,
      logo: carrera,
    },
    {
      id: 6,
      logo: upwork,
    },
    {
      id: 7,
      logo: verizon,
    },
    {
      id: 8,
      logo: bonanza,
    },
    {
      id: 9,
      logo: magento,
    },
    {
      id: 10,
      logo: suzuki,
    },
    {
      id: 11,
      logo: coinbase,
    },
    {
      id: 12,
      logo: wetransfer,
    },
    {
      id: 13,
      logo: microsoft,
    },
    {
      id: 14,
      logo: allianz,
    },
    {
      id: 15,
      logo: expedia,
    },
    {
      id: 16,
      logo: heineken,
    },
  ];

  return (
    <div className="flex flex-wrap gap-3 md:gap-5 pt-16 justify-center md:pt-32">
      {startups.map((element) => (
        <div
          key={element.id}
          className="bg-gray-200 rounded-lg w-36 lg:w-64 h-16 lg:h-36 px-6 md:px-10 flex justify-center items-center"
        >
          <figure>
            <img className="object-contain" src={element.logo.src} />
          </figure>
        </div>
      ))}
    </div>
  );
}

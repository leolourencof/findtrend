import spotify from "../../../../assets/logos/Spotify - Original.svg";
import dribbble from "../../../../assets/logos/Dribbble - Original.svg";
import figma from "../../../../assets/logos/Figma - Original.svg";
import discord from "../../../../assets/logos/Discord - Original.svg";
import tiktok from "../../../../assets/logos/TikTok - Original.svg";
import reddit from "../../../../assets/logos/Reddit - Original.svg";

const logos = [
  { id: 1, logo: spotify, style: "bg-white" },
  { id: 2, logo: dribbble, style: "bg-lime-400" },
  { id: 3, logo: figma, style: "bg-white" },
  { id: 4, logo: discord, style: "bg-white" },
  { id: 5, logo: tiktok, style: "bg-white" },
  { id: 6, logo: reddit, style: "bg-white" },
];

export default function Cards() {
  return (
    <div className="flex flex-wrap gap-3 pt-24 justify-center">
      {logos.map((element) => (
        <div
          key={element.id}
          className={`w-36 lg:w-44 h-36 lg:h-44 flex justify-center items-center rounded-lg ${element.style}`}
        >
          <figure>
            <img src={element.logo.src} className="w-20 h-20 object-contain" />
          </figure>
        </div>
      ))}
    </div>
  );
}

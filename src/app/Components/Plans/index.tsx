"use client";

import * as React from "react";
import arrow from "../../../assets/icons/Arrow 1.svg";
import Cards from "./Components/Cards";

export default function Plans() {
  const [turnButton, setTurnButton] = React.useState<boolean>(true);
  const ref = React.useRef<HTMLDivElement>(null);

  function toggleButton() {
    setTurnButton((state) => !state);

    ref.current!.style.justifySelf = turnButton ? "end" : "start";
    const slidingClass = turnButton ? "l-sliding" : "r-sliding";

    ref.current!.classList.add(slidingClass);
    setTimeout(() => ref.current!.classList.remove(slidingClass), 500);
  }

  return (
    <div>
      <div className="w-11/12 mx-auto pt-20 pb-8 lg:pb-20">
        <div>
          <h2 className="font-bold text-4xl text-gray-300 text-center">
            Get Your Best deal
          </h2>
        </div>

        <div className="flex flex-col mx-auto max-w-md">
          <div className="flex gap-8 items-center justify-center pt-11 text-lg ">
            <span className="text-gray-200">Monthly</span>

            <button
              onClick={toggleButton}
              className="bg-white w-28 h-11 grid items-center rounded-full"
            >
              <div
                ref={ref}
                className="rounded-full bg-lime-400 w-8 h-8 mx-3"
              />
            </button>

            <span className="text-gray-300">Yearly</span>
          </div>

          <div className="w-28 flex flex-col self-center translate-x-28 pt-6">
            <figure className="rotate-45 self-start">
              <img src={arrow.src} />
            </figure>

            <span className="font-caveat text-gray-200 text-center text-lg -rotate-6">
              Save 10% per month
            </span>
          </div>
        </div>

        <Cards />
      </div>
    </div>
  );
}

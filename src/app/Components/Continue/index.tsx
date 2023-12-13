import logo from "../../../assets/logos/Logo.svg";
import exiticon from "../../../assets/icons/Vector.svg";
import arrow from "../../../assets/icons/Arrow Black.svg";

export default function Continue() {
  return (
    <div className="bg-lime-400 w-full ">
      <div className="w-11/12 mx-auto max-w-3xl">
        <div className="pt-20">
          <h1 className="text-3xl font-bold text-center md:text-6xl">
            Open new tabs is Sh*t
          </h1>
        </div>

        <div className="flex flex-col md:flex-row-reverse md:pt-16">
          <div className="w-32 h-28 translate-y-3 self-end -rotate-12 md:translate-y-0 md:self-start">
            <span className="font-caveat font-bold text-lg text-center">
              You just need one tab now
            </span>

            <img src={arrow.src} />
          </div>

          <div className="bg-white px-9 py-3 rounded-2xl max-w-lg mx-auto md:px-20 md:py-14">
            <div className="bg-dark-gray flex items-center justify-between relative h-20 overflow-hidden">
              <div className="flex items-center pl-5 gap-5">
                <figure className="pl-2">
                  <img src={logo.src} className="min-h-[40px] min-w-[40px]" />
                </figure>

                <span className="text-white text-lg font-medium whitespace-nowrap">
                  Findtrent - Elon mas
                </span>
              </div>

              <button className="w-20 h-20 flex items-center justify-center bg-gradient-to-l from-dark-gray via-dark-gray to-opacity-gray absolute right-0">
                <img src={exiticon.src} />
              </button>
            </div>
          </div>

          <div className="w-36 h-28 -translate-y-5 translate-x-20 self-start -rotate-12 md:translate-x-0 md:translate-y-5">
            <img src={arrow.src} className="rotate-180" />

            <span className="font-caveat font-bold text-lg text-center">
              Slution for discover a trend
            </span>
          </div>
        </div>

        <div className="pt-3 md:pt-12 pb-9 md:pb-24">
          <span className="font-medium text-center text-sm md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            eros amet, imperdiet semper orci tincidunt.
          </span>
        </div>
      </div>
    </div>
  );
}

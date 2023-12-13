import logo from "../../../../assets/logos/Logo.svg";
import navicon from "../../../../assets/icons/Menu.svg";

export default function NavBar() {
  return (
    <header className="text-white">
      <div className="flex justify-between items-center w-11/12 mx-auto mt-8 max-w-7xl">
        <div className="lg:flex items-center gap-4">
          <img src={logo.src} alt="" />
          <span className="hidden lg:block font-bold text-2xl">Findtrend</span>
        </div>

        <nav className="hidden lg:flex gap-6 xl:gap-14 text-lg font-medium">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">How it work</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Solution</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
        </nav>

        <div className="lg:hidden">
          <img src={navicon.src} alt="" />
        </div>

        <div className="hidden lg:flex items-center text-lg font-medium gap-10">
          <a href="#">
            <span>Login</span>
          </a>

          <a href="#" className="bg-white px-9 py-3.5 rounded-[35px]">
            <span className="text-black ">Register</span>
          </a>
        </div>
      </div>
    </header>
  );
}

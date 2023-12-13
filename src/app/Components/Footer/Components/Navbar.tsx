import logo from "../../../../assets/logos/Logo.svg";

export default function NavBar() {
  return (
    <div className="bg-white">
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col items-center py-16 lg:py-7 lg:flex-row lg:justify-between">
        <div className="flex items-center gap-5">
          <img src={logo.src} alt="" />
          <span className="font-bold text-2xl">Findtrend</span>
        </div>

        <nav className="flex flex-col lg:flex-row gap-14 text-lg font-medium text-center pt-16 lg:pt-0">
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
      </div>
    </div>
  );
}

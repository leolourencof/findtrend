import NavBar from "./Components/Navbar";

export default function Footer() {
  return (
    <div className="bg-lime-300">
      <div className="w-11/12 mx-auto py-20 max-w-7xl">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-4xl font-bold pb-9 lg:text-6xl lg:pb-14">
            Join us on email for{" "}
            <span className="text-light-gray">more trending topics</span>
          </h2>

          <button className="px-12 py-5 rounded-full bg-dark-gray">
            <span className="text-white text-lg font-medium">Join now</span>
          </button>
        </div>
      </div>

      <NavBar />
    </div>
  );
}

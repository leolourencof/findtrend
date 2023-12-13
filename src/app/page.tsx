import Continue from "./Components/Continue";
import Details from "./Components/Details";
import Footer from "./Components/Footer";
import Home from "./Components/Home/index";
import Plans from "./Components/Plans";
import Startups from "./Components/Startups";
import TextHolder from "./Components/TextHolder";

export default function App() {
  return (
    <>
      <Home />
      <Continue />
      <TextHolder />
      <Startups />
      <Details />
      <Plans />
      <Footer />
    </>
  );
}

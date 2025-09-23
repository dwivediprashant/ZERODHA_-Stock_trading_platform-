import OpenAccount from "./OpenAccount";
import Eductaion from "./Education";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Pricing from "./Pricing";
import Footer from "../Footer";
import Navbar from "../Navbar";

function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <Pricing />
      <Eductaion />
      <OpenAccount />
    </>
  );
}

export default HomePage;

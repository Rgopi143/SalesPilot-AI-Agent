import Hero from "./Hero";
import HomeIntro from "./HomeIntro";
import HomeServices from "./HomeServices";
import HRCard from "./HRCard";
import TechStack from "./TechStack";
import Process from "./Process";
import HomeProjects from "./HomeProjects";
import Pricing from "./Pricing";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeIntro />
      <HomeServices />
      <HRCard />
      <HomeProjects />
      <TechStack />
      <Process />
      <Pricing />
    </>
  );
};

export default Home;

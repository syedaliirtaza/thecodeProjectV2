import react from "react"
import About from "../components/About";
import Collect from "../components/Collect";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero";
import Me from "../components/Me";
import Roadmap from "../components/Roadmap";
import Socials from "../components/Socials";
import Team from "../components/Team";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="homeContainer ">
        <Hero />
        <About />
        <Collect />
        <Team />
        <Me />
        <Faq />
        <Socials />
        <Footer />
      </div>
    </div>
  );
}

export default Home;

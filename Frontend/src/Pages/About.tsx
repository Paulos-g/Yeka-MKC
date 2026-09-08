import Nav from "../Components/Navbar";
import Footer from "../Components/Footer";
import History from "../Components/Histories";
import MissionVisionCards from "../Components/ValAndVis";

import Leadership from "../Components/LeadersCard";
import Core from "../Components/Cores";
import IntroSection from "../Components/Intro";
import { Leaders } from "../Components/Infos";

function About() {
  return (
    <>
      <Nav />
      <IntroSection
        Header={
          <>
            About <span className="text-blue-400">Yeka MKC</span>
          </>
        }
        Desc={
          <>
            Yeka MKC is Build in the Center of Christianinty Jesus Christ <br />{" "}
            With Vibrant Community and Strong Faith Located heart of In Addis
          </>
        }
      />
      <History />
      <MissionVisionCards />
      <h1
        data-aos="fade-down"
        className="px-4 text-4xl font-cormorant pt-24 text-center font-bold sm:text-5xl"
      >
        Our Core <span className="text-blue-400"> Values</span>
      </h1>
      <p
        data-aos="fade"
        className="px-4 text-center text-xl text-gray-500 mt-5 mb-20 sm:text-2xl"
      >
        These Guide Our community as Church
      </p>
      <Core />
      <h1
        data-aos="fade-down"
        className="px-4 text-4xl font-cormorant pt-24 text-center font-bold sm:text-5xl"
      >
        Our <span className="text-blue-400"> Leaderships</span>
      </h1>
      <p
        data-aos="fade"
        className="px-4 text-center text-xl text-gray-500 mt-5 mb-20 sm:text-2xl"
      >
        Meet Our Welcoming church{" "}
        <span className="text-blue-400 font-great-vibes text-4xl sm:text-5xl">
          Leadership
        </span>
      </p>
      <Leadership data={Leaders} />

      <Footer />
    </>
  );
}
export default About;

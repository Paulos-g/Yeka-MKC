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
      <h1 className="text-5xl font-cormorant pt-24 text-center font-bold">
        Our Core <span className="text-blue-400"> Values</span>
      </h1>
      <p className="text-center text-2xl text-gray-500 mt-5 mb-20">
        These Guide Our community as Church
      </p>
      <Core />
      <h1 className="text-5xl font-cormorant pt-24 text-center font-bold">
        Our <span className="text-blue-400"> Leaderships</span>
      </h1>
      <p className="text-center text-2xl text-gray-500 mt-5 mb-20">
        Meet Our Welcoming church{" "}
        <span className="text-blue-400 font-great-vibes text-5xl">
          Leadership
        </span>
      </p>
      <Leadership data={Leaders} />

      <Footer />
    </>
  );
}
export default About;

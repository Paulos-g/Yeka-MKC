import Nav from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeadingUnderline from "../Components/HeadingLine";
import History from "../Components/Histories";
import MissionVisionCards from "../Components/ValAndVis";

import Leadership from "../Components/LeadersCard";
import Core from "../Components/Cores";
function About() {
  return (
    <>
      <Nav />
      <div className="bg-blue-100 w-screen h-78">
        <h1 className="text-5xl font-cormorant pt-24 text-center font-bold">
          About <span className="text-blue-400"> Yeka MKC</span>
        </h1>
        <HeadingUnderline />
        <p className="text-center text-2xl text-gray-500">
          Yeka MKC is Build in the Center of Christianinty Jesus Christ <br />{" "}
          With Vibrant Community and Strong Faith Located heart of In Addis
        </p>
      </div>
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
      <Leadership />

      <Footer />
    </>
  );
}
export default About;

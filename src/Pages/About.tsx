import Nav from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeadingUnderline from "../Components/HeadingLine";
import History from "../Components/Histories";
function About() {
  return (
    <>
      <Nav />
      <div className="bg-blue-100 w-screen h-78">
        <h1 className="text-5xl font-cormorant pt-24 text-center font-bold">
          About <span className="text-blue-400"> Yeka MKC</span>
        </h1>
        <HeadingUnderline />
        <p className="text-center text-2xl">
          Yeka MKC is Build in the Center of Christianinty Jesus Christ <br />{" "}
          With Vibrant Community and Strong Faith Located heart of In Addis
        </p>
      </div>
      <History />

      <Footer />
    </>
  );
}
export default About;

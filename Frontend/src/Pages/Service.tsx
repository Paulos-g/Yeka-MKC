import Nav from "../Components/Navbar";
import IntroSection from "../Components/Intro";
import ServicesCards from "../Components/ServiceCard";
import Leadership from "../Components/LeadersCard";
import Footer from "../Components/Footer";
import { Programs } from "../Components/Infos";

function Services() {
  return (
    <>
      <Nav />
      <IntroSection
        Header={
          <>
            Our Service And <span className="text-blue-400">Programs</span>
          </>
        }
        Desc="See Below about our Week and Anuall programs"
      />

      <h1
        data-aos="fade-down"
        className="mt-16 text-4xl font-bold font-cormorant text-center sm:text-5xl md:mt-20"
      >
        Sunday Service
      </h1>
      <p
        data-aos="fade"
        className="mt-3 text-base font-bold text-gray-500 text-center sm:text-xl"
      >
        Come And Worship the Lord With Us
      </p>

      <ServicesCards />

      <h1
        data-aos="fade-down"
        className="mt-16 mb-6 text-4xl font-bold font-cormorant text-center sm:text-5xl md:mt-20 md:mb-10"
      >
        Weekly <span className="text-blue-400">Programs</span>
      </h1>

      <Leadership data={Programs} />
      <Footer />
    </>
  );
}
export default Services;

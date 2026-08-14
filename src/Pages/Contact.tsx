import Nav from "../Components/Navbar";
import IntroSection from "../Components/Intro";
import Footer from "../Components/Footer";
import ContactSection from "../Components/ContactSection";
import { FaMailBulk } from "react-icons/fa";

function Contact() {
  return (
    <>
      <Nav />
      <IntroSection
        Header="Contact Us"
        Icon={FaMailBulk}
        Desc={
          <>
            Contact Us Through our Phone number. <br />
            <span className="text-blue-400">
              "The day of salvation is today"
            </span>{" "}
            2 Corinthians 6:2
          </>
        }
      />
      <ContactSection />
      <Footer />
    </>
  );
}
export default Contact;

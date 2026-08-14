import DonationInput from "../Components/DonateInput";
import DonateCard from "../Components/DonationCard";
import IntroSection from "../Components/Intro";
import Nav from "../Components/Navbar";
import { FaChurch } from "react-icons/fa";
import Footer from "../Components/Footer";

function Donation() {
  return (
    <>
      <Nav />
      <IntroSection
        Header="Support Our Ministry"
        Icon={FaChurch}
        Desc={
          <>
            Your generous donations help us continue our mission of spreading
            God's love
            <br />
            and serving our community. Every contribution makes a difference.
          </>
        }
      />
      <DonateCard />
      <DonationInput />
      <Footer />
    </>
  );
}
export default Donation;

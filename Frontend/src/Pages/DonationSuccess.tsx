import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import Footer from "../Components/Footer";
import IntroSection from "../Components/Intro";
import Nav from "../Components/Navbar";

function DonationSuccess() {
  return (
    <>
      <Nav />
      <IntroSection
        Header="Donation Success"
        Icon={FiCheckCircle}
        IconAlign="right"
        Desc={
          <>
            <span className="block !text-base sm:!text-xl">
              Your donation was successfully completed. Thank you for your
              generosity!
            </span>
            <Link
              to="/"
              className="mt-3 inline-flex items-center rounded-full bg-blue-500 px-5 py-2 text-base font-semibold text-white transition-colors hover:bg-[#B58F4D] sm:text-lg"
            >
              Return Home
            </Link>
          </>
        }
      />
      <Footer />
    </>
  );
}

export default DonationSuccess;

import HeadingUnderline from "./HeadingLine";
import worshiping from "../assets/worshiping.jpg";
import {
  FaUsers,
  FaBible,
  FaChurch,
  FaPrayingHands,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import SmallText from "./SmallHeading";
import Buttons from "./Button";
function BOdy() {
  const churchData = [
    {
      id: 1,
      icon: [<FaUsers />],
      title: "Our Community",
      description:
        "Join Our Strong and loved church family and Grow in faith together",
    },
    {
      id: 2,
      icon: [<FaBible />],
      title: "Bible Study",
      description:
        "Be family of Our bible study small groups around your community ",
    },
    {
      id: 3,
      icon: [<FaPrayingHands />],
      title: "Prayer & Worship",
      description:
        "Pray and worship the kingdom of God with our weekly programs",
    },
    {
      id: 4,
      icon: [<FaChurch />],
      title: "Youth Event",
      description: "Be part of our Youth family and grow your faith together",
    },
  ];
  return (
    <>
      <h2 className="text-5xl font-pt-serif text-center mt-8 mb">
        A Place to Belong
      </h2>
      <HeadingUnderline />
      <div className="mt-32 flex mb-32 justify-around flex-wrap gap-6">
        <div className="">
          <SmallText text="WELCOME" />
          <h2 className="text-4xl font-pt-serif ">
            Where
            <span className="text-blue-400 font-great-vibes text-5xl">
              Holyspirit{" "}
            </span>
            Moves
          </h2>
          <HeadingUnderline />

          <p className="font-jost text-lg mt-16">
            Yeka MKC is A local church centered on Jesus Christ Where <br />{" "}
            people come together to worship, grow in faith and build meaningful{" "}
            <br />
            relationships,Became our Member and grow your Faith and relationship{" "}
            <br />
            with Jesus Christ
          </p>
        </div>
        <div className="rounded-2xl border-2 border-amber-300 p-1 transition-all duration-500 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.6)]">
          <img
            className="rounded-2xl"
            src={worshiping}
            alt="People worshiping"
          />
        </div>
      </div>
      <h2 className="text-center text-5xl font-pt-serif">
        Our <span className="text-blue-400">Church</span>
      </h2>
      <HeadingUnderline />{" "}
      <div
        className="flex  flex-wrap justify-around mt-8 gap-6
        "
      >
        {churchData.map((church, id) => (
          <div
            key={church.id}
            className="bg-white max-w-82 h-52 rounded-2xl shadow-xl hover:bg-amber-100 transition-all ease-in-out duration-300"
          >
            <div className="flex justify-center">
              <span className="text-blue-400 text-4xl mb-4">{church.icon}</span>
            </div>
            <p className="text-2xl font-bold mb-4 text-center">
              {church.title}
            </p>
            <p className="text-base font-jost text-gray-500 text-center">
              {church.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-around mt-32">
        <div>
          <SmallText text="Join us" className=" !text-xl" />
          <h2 className="text-4xl font-pt-serif ">
            Sunday{" "}
            <span className="text-blue-400 font-great-vibes text-5xl">
              Worship
            </span>{" "}
            and
            <span className="text-blue-400 font-great-vibes text-5xl">
              Preach
            </span>{" "}
          </h2>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-amber-300 text-2xl">
              <FaCalendarAlt />
            </span>
            <p className="font-jost text-lg">
              Every Sunday · 9:00 AM — 11:30 AM
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-amber-300 text-2xl">
              <FaMapMarkerAlt />
            </span>
            <p className="font-jost text-lg">Yeka, Addis Ababa</p>
          </div>
        </div>

        <Buttons
          text="Get direction"
          icon={FaArrowRight}
          className=" !text-sm !font-semibold !rounded-md !h-12 !mt-6"
        />
      </div>
    </>
  );
}
export default BOdy;

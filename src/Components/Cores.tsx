import { FaCross, FaBible, FaUsers, FaHandsHelping } from "react-icons/fa";

const churchData = [
  {
    id: 1,
    icon: [<FaCross />],
    title: "Christ-Centered",
    description:
      "We build our faith, lives, and ministry on Jesus Christ, our true foundation.",
  },
  {
    id: 2,
    icon: [<FaBible />],
    title: "Biblical Truth",
    description:
      "We follow God's Word as the foundation for our faith, teaching, and daily life.",
  },
  {
    id: 3,
    icon: [<FaUsers />],
    title: "Love & Fellowship",
    description:
      "We live in unity, serving one another and showing Christ's love to our community.",
  },
  {
    id: 4,
    icon: [<FaHandsHelping />],
    title: "Mission & Service",
    description:
      "We share the Gospel and serve others, bringing Christ's hope to our communities and beyond.",
  },
];

function Core() {
  return (
    <div>
      <div
        className="flex  flex-wrap justify-around mt-8 gap-6
        "
      >
        {churchData.map((church) => (
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
    </div>
  );
}

export default Core;

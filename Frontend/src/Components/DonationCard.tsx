import { FaChurch, FaHandsHelping, FaHeart } from "react-icons/fa";
import { type IconType } from "react-icons";

interface DonateItem {
  id: number;
  title: string;
  description: string;
  icon: IconType;
}

const DonateData: DonateItem[] = [
  {
    id: 1,
    title: "Support the Church Building",
    description:
      "Your generous support helps us build and maintain a place where God's people can worship and fellowship.",
    icon: FaChurch,
  },
  {
    id: 2,
    title: "Meblat Kechalku Mestet Echlalew",
    description:
      "Support this ministry and help us continue serving God's people and spreading His word.",
    icon: FaHandsHelping,
  },
  {
    id: 3,
    title: "Asrat",
    description:
      "Your contribution helps strengthen our ministry and make a meaningful difference in our community.",
    icon: FaHeart,
  },
];

function DonateCard() {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-15">
      {DonateData.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={item.id * 100}
            className="flex-1 min-w-[280px] max-w-[380px] bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition duration-300 mt-16"
          >
            <div className="flex justify-center mb-5">
              <Icon className="text-6xl text-blue-600" />
            </div>

            <h2 className="text-3xl font-cormorant font-bold mb-4">
              {item.title}
            </h2>

            <p className="text-gray-500 leading-relaxed">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DonateCard;

import React from "react";
import { FaRegClock } from "react-icons/fa";

// 1. Define the data structure
type ServiceType = {
  id: number;
  title: string;
  time: string;
  description: string;
  bullets: string[];
};

// 2. Extract the content into an array
const ServicesData: ServiceType[] = [
  {
    id: 1,
    title: "Sunday Worship Service",
    time: "10:00 AM - 12:30 AM",
    description:
      "Join us for inspiring worship, biblical teaching, and fellowship",
    bullets: [
      "Contemporary Worship",
      "Biblical Preaching",
      "Prayer Time",
      "Fellowship",
    ],
  },
  {
    id: 2,
    title: "Morning Prayer Service",
    time: "8:00 AM - 9:45 AM",
    description: "A time of focused prayer and spiritual reflection",
    bullets: [
      "Intercessory Prayer",
      "Worship Songs",
      "Testimonies",
      "Communion",
    ],
  },
];

// 3. Create the reusable Card Component that accepts props
interface ServiceCardProps {
  title: string;
  time: string;
  description: string;
  bullets: string[];
  animation?: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  time,
  description,
  bullets,
  animation = "fade-up",
  delay = 0,
}) => {
  return (
    <div
      data-aos={animation}
      data-aos-delay={delay}
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-10"
    >
      <h2 className="text-2xl font-bold text-slate-900 mb-3">{title}</h2>

      {/* Time & React Icon */}
      <div className="flex items-center text-blue-600 text-sm font-medium mb-6">
        <FaRegClock className="mr-2 text-lg" />
        {time}
      </div>

      <p className="text-slate-600 mb-8">{description}</p>

      {/* Bullet Point Grid */}
      <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-slate-600 text-sm">
        {bullets.map((bullet, index) => (
          <div key={index} className="flex items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3 shrink-0"></div>
            {bullet}
          </div>
        ))}
      </div>
    </div>
  );
};

// 4. Main Component mapping the data to the Card component
function ServicesCards() {
  return (
    <div className="bg-gray-50 p-8 h-89 mb-30 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {ServicesData.map((service, index) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            time={service.time}
            description={service.description}
            bullets={service.bullets}
            animation={index % 2 === 0 ? "fade-right" : "fade-left"}
            delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
}

export default ServicesCards;

import { type IconType } from "react-icons";
interface CardProps {
  data: {
    id: number;
    img?: string;
    name: string;
    tag: string;
    time?: string;
    description?: string;
    Icon?: IconType;
  }[];
}

function Leadership({ data }: CardProps) {
  return (
    <div className="flex justify-around flex-wrap gap-6 mb-9">
      {data.map((content, index) => (
        <div
          key={content.id}
          data-aos="fade-up"
          data-aos-delay={(index % 4) * 100}
          className="bg-white w-90 h-58 rounded-2xl shadow-xl hover:bg-amber-100 transition-all duration-300"
        >
          {content.img && (
            <img
              src={content.img}
              alt={content.name}
              className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
            />
          )}

          <p className="text-center font-bold text-xl text-blue-400">
            {content.name}
          </p>

          <p className="text-center  mt-2.5 text-lg">{content.tag}</p>
          {content.time && (
            <p className="text-gray-500 text-center font-bold mb-3 mt-3">
              {content.time}
            </p>
          )}
          {content.description && (
            <p className="text-gray-500 text-center">{content.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Leadership;

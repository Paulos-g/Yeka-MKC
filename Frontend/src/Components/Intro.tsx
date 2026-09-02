import HeadingUnderline from "./HeadingLine";
import { type IconType } from "react-icons";
import type { ReactNode } from "react";

interface IntroProps {
  Header: ReactNode;
  Desc: ReactNode;
  Icon?: IconType;
  IconAlign?: "center" | "right";
}
function IntroSection({
  Header,
  Desc,
  Icon,
  IconAlign = "center",
}: IntroProps) {
  return (
    <div>
      <div className="relative h-78 w-screen bg-blue-100">
        {Icon && (
          <span data-aos="zoom-in">
            <Icon
              className={
                IconAlign === "right"
                  ? "absolute right-4 top-24 text-5xl text-blue-400 sm:right-12 sm:text-6xl"
                  : "mx-auto -mb-13 mt-20 text-6xl text-blue-400"
              }
            />
          </span>
        )}
        <h1
          data-aos="fade-down"
          className="text-6xl font-cormorant pt-24 text-center font-bold"
        >
          {Header}
        </h1>
        <HeadingUnderline />
        <p
          data-aos="fade-up"
          data-aos-delay="80"
          className="text-center text-2xl text-gray-500 font-bold"
        >
          {Desc}
        </p>
      </div>
    </div>
  );
}
export default IntroSection;

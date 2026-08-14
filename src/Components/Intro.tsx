import HeadingUnderline from "./HeadingLine";
import { type IconType } from "react-icons";
import type { ReactNode } from "react";

interface IntroProps {
  Header: ReactNode;
  Desc: ReactNode;
  Icon?: IconType;
}
function IntroSection({ Header, Desc, Icon }: IntroProps) {
  return (
    <div>
      <div className="bg-blue-100 w-screen h-78">
        {Icon && (
          <Icon className="text-6xl mx-auto mt-20 text-blue-400 -mb-13 " />
        )}
        <h1 className="text-6xl font-cormorant pt-24 text-center font-bold">
          {Header}
        </h1>
        <HeadingUnderline />
        <p className="text-center text-2xl text-gray-500 font-bold">{Desc}</p>
      </div>
    </div>
  );
}
export default IntroSection;

import HeadingUnderline from "./HeadingLine";
import Buttons from "./Button";
import { FaArrowRight } from "react-icons/fa";
interface ctaProp {
  Header: string;
  SmallHead: string;
}
export function CTA({ Header, SmallHead }: ctaProp) {
  return (
    <div className="bg-black min-h-screen w-screen mt-16 flex flex-col gap-18">
      {" "}
      <br />
      <div>
        <h2 className=" text-white text-center font-bold text-5xl font-cormorant ">
          {Header}
        </h2>
        <HeadingUnderline />
      </div>
      <p className=" text-white text-center  text-xl">{SmallHead}</p>
      <Buttons
        text="Join Us This Sunday"
        className=" !rounded-xl !mx-auto !block "
        icon={FaArrowRight}
      />
    </div>
  );
}

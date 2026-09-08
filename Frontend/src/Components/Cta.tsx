import HeadingUnderline from "./HeadingLine";
import Buttons from "./Button";
import { FaArrowRight } from "react-icons/fa";
interface ctaProp {
  Header: string;
  SmallHead: string;
}
export function CTA({ Header, SmallHead }: ctaProp) {
  return (
    <div className="bg-black min-h-screen w-full mt-16 flex flex-col gap-18">
      {" "}
      <br />
      <div data-aos="fade-down">
        <h2 className="px-4 text-white text-center font-bold text-4xl font-cormorant sm:text-5xl">
          {Header}
        </h2>
        <HeadingUnderline />
      </div>
      <p
        data-aos="fade"
        data-aos-delay="100"
        className=" text-white text-center  text-xl"
      >
        {SmallHead}
      </p>
      <div data-aos="zoom-in" data-aos-delay="160">
        <Buttons
          text="Join Us This Sunday"
          className=" !rounded-xl !mx-auto !block "
          icon={FaArrowRight}
        />
      </div>
    </div>
  );
}

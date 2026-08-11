import HeadingUnderline from "./HeadingLine";
import worshiping from "../assets/worshiping.jpg";

function BOdy() {
  return (
    <div>
      <h2 className="text-4xl font-pt-serif text-center mt-8 mb">
        A Place to Belong
      </h2>
      <HeadingUnderline />
      <div className="mt-32 flex mb-32 justify-around">
        <div className="">
          <span className="inline-block text-[#C9A253] font-manrope font-bold text-xs sm:text-sm tracking-widest uppercase mb-4 ml-2 text-center">
            Welcome
          </span>
          <h2 className="text-4xl font-pt-serif ">Where Holyspirit Moves </h2>
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
          {" "}
          <img
            className="rounded-2xl"
            src={worshiping}
            alt="People worshiping"
          />
        </div>
      </div>
    </div>
  );
}
export default BOdy;

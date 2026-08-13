import HeadingUnderline from "./HeadingLine";
interface IntroProps {
  Header: String;
  Desc: String;
}
function IntroSection({ Header, Desc }: IntroProps) {
  return (
    <div>
      <div className="bg-blue-100 w-screen h-78">
        <h1 className="text-5xl font-cormorant pt-24 text-center font-bold">
          {Header}
        </h1>
        <HeadingUnderline />
        <p className="text-center text-2xl text-gray-500 font-bold">{Desc}</p>
      </div>
    </div>
  );
}
export default IntroSection;

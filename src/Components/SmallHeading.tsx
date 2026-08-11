interface Props {
  className: String;
  text: String;
}

function SmallText({ text, className = "" }: Props) {
  return (
    <span
      className={`inline-block text-[#C9A253] font-manrope font-bold text-xs sm:text-sm tracking-widest uppercase mb-4 ml-2 text-center ${className}`}
    >
      {text}{" "}
    </span>
  );
}
export default SmallText;

interface ButtonProps {
  text: string;
  icon?: any;
  className?: string;
}

function Buttons({ text, icon, className = "" }: ButtonProps) {
  const Icon = icon;

  return (
    <button
      className={`bg-blue-500 px-6 py-3 rounded-full text-white font-[Manrope] font-semibold hover:bg-[#B58F4D] transition duration-300 cursor-pointer ${className}`}
    >
      {Icon && <Icon className="mr-2 inline" />} {text}
    </button>
  );
}
export default Buttons;

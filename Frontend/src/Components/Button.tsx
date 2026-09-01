interface ButtonProps {
  text: string;
  icon?: any;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

function Buttons({
  text,
  icon,
  className = "",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const Icon = icon;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`bg-blue-500 px-6 py-3 rounded-full text-white font-[Manrope] font-semibold hover:bg-[#B58F4D] transition duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    >
      {Icon && <Icon className="mr-2 inline" />} {text}
    </button>
  );
}

export default Buttons;

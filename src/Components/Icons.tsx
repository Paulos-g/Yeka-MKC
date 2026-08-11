import { type IconType } from "react-icons";

interface IconProp {
  iconName: IconType;
  className?: string;
}

export function Icon({ iconName: Icon, className = "" }: IconProp) {
  return (
    <div>
      <Icon className={className} />
    </div>
  );
}

import { IconType } from "react-icons";

interface StatusProps {
  text: string;
  icon: IconType;
  bg: string;
  color: string;
}

export const Status: React.FC<StatusProps> = (status) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${status.bg} ${status.color}`}
    >
      {status.text} <status.icon fontSize={15} />
    </div>
  );
};

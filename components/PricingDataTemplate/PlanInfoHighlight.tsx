import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

type PlanInfoHighlightProps = {
  text: string;
};

export const PlanInfoHighlight: React.FC<PlanInfoHighlightProps> = ({
  text,
}) => {
  return (
    <div className="flex gap-[10px] mb-[10px] items-center">
      <FaCheckCircle className="text-primary-pink" />
      <p className="text-[12px] md:text-[14px] text-muted">{text}</p>
    </div>
  );
};

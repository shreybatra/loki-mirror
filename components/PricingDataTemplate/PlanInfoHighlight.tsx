import Image from "next/image";
import checkMarkImage from "../../assets/svg/Checkmark Circle.svg";

export const PlanInfoHighlight = ({ text }) => {
  return (
    <div className="flex gap-[10px]">
      <Image src={checkMarkImage} alt="'checkMarkImage"></Image>
      <p className="opacity-[0.8]">{text}</p>
    </div>
  );
};

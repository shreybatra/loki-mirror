import Image from "next/image";
import checkMarkImage from "../../assets/svg/Checkmark Circle.svg";

type PlanInfoHighlightProps = {
  text: string
}



export const PlanInfoHighlight: React.FC<PlanInfoHighlightProps> = ({ text }) => {
  return (
    <div className="flex gap-[10px]">
      <Image src={checkMarkImage} alt="'checkMarkImage"></Image>
      <p className="opacity-[0.8]">{text}</p>
    </div>
  );
};

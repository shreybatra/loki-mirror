import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface IDropdownProps {
  tag: string;
  className?: string;
  Menu: string[];
  setSelect: (value: string) => void;
}

const DropDown = ({ tag, Menu, className, setSelect }: IDropdownProps) => {
  return (
    <Select onValueChange={setSelect}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={tag}></SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-slate-50">
        {Menu.map((item, index) => {
          return (
            <SelectItem
              className={`${
                index !== Menu.length - 1 &&
                "border-b-[1px] border-spacing-4 border-slate-400"
              }  text-black`}
              value={item}
              key={index}
            >
              {item}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default DropDown;

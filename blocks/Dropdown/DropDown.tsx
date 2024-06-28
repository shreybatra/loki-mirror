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
      <SelectContent
        className="bg-[var(--bg-black-light)]"
        style={{ border: "1px solid var(--contact-form-border)" }}
      >
        {Menu.map((item, index) => {
          return (
            <SelectItem
              className={`${
                index !== Menu.length - 1 && "border-b-[1px] border-spacing-4 "
              } text-gray-300`}
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

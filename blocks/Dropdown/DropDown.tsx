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
  option: { label: string; value: string }[];
  setSelect: (value: string) => void;
}

const DropDown = ({ tag, option, className, setSelect }: IDropdownProps) => {
  return (
    <Select onValueChange={setSelect}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={tag}></SelectValue>
      </SelectTrigger>
      <SelectContent
        className="bg-[var(--bg-black-light)]"
        style={{ border: "1px solid var(--contact-form-border)" }}
      >
        {option.map((item, index) => {
          return (
            <SelectItem
              className={`${
                index !== option.length - 1 &&
                "border-b-[1px] border-spacing-4 "
              } text-gray-300`}
              value={item.value}
              key={index}
            >
              {item.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default DropDown;

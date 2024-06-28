import { Input } from "@/components/ui/input";
import Dropdown from "@/blocks/Dropdown/DropDown";
import { useState } from "react";
import axios from "axios";

const SchedulingForm = ({ closeModal }: { closeModal: () => void }) => {
  const JobFunctionMenu = [
    "Software Engineer",
    "Product Manager",
    "Designer",
    "Data Scientist",
    "DevOps",
    "Other",
  ];
  interface IInput {
    name: string;
    email: string;
    phone: string;
    companyName: string;
    designation: string;
    subject: string;
  }

  const [inputs, setInputs] = useState([
    { name: "name", value: "", placeholder: "Full Name", type: "text" },
    { name: "email", value: "", placeholder: "Work Email", type: "email" },
    { name: "phone", value: "", placeholder: "Phone number", type: "phone" },
    { name: "companyName", value: "", placeholder: "Company", type: "text" },
  ]);

  const [select, setSelect] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelect(value);
  };
  const [disabled, setDisabled] = useState(false);
  const handleSubmit = () => {
    let data: IInput = {
      name: "",
      email: "",
      phone: "",
      companyName: "",
      designation: "",
      subject: "Demo Request",
    };
    setDisabled(true);
    inputs.map((i: any) => {
      if (i.value == "") {
        alert("Please fill all the fields");
        resetInputs();
        setDisabled(false);
        return;
      }
      data[i.name as keyof IInput] = i.value;
    });
    if (select == null) {
      alert("Please fill all the fields");
      resetInputs();
      setDisabled(false);
      return;
    }
    data.designation = select;
    sendData(data);
  };
  const sendData = async (data: IInput) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`,
        data
      );
      if (response.status === 200) {
        alert("Message sent successfully!");
        closeModal();
        resetInputs();
      } else {
        alert("An error occured. Please try again later.");
        resetInputs();
      }
    } catch (error) {
      alert("An error occured. Please try again later.");
      resetInputs();
    }
  };

  const resetInputs = () => {
    const newInputs = [...inputs];
    newInputs.map((i) => {
      i.value = "";
    });
    setInputs(newInputs);
    setSelect(null);
  };
  return (
    <div className="flex flex-col justify-between h-full p-4 gap-5">
      <div className="flex flex-col">
        <h3 className="text-primary-pink text-start tracking-tight text-3xl font-medium">
          Book a demo
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-4 md:gap-7 md:grid-cols-1 justify-end items-end">
        {inputs.map((input, index) => (
          <div key={index}>
            <Input
              type={input.type}
              name={input.name}
              className="placeholder:text-slate-500 text-black mt-0.5 bg-slate-50"
              id={input.name}
              placeholder={input.placeholder}
              value={input.value}
              onChange={(e) => {
                const newInputs = [...inputs];
                newInputs[index].value = e.target.value;
                setInputs(newInputs);
              }}
            />
          </div>
        ))}
        <div className="flex flex-col items-start gap-2">
          <Dropdown
            className="text-sm text-black  py-2  w-full placeholder:text-slate-500 bg-slate-50"
            tag="Chose your job role"
            Menu={JobFunctionMenu}
            setSelect={handleSelect}
          />
        </div>
      </div>
      <div className="flex  justify-center items-start">
        <button
          disabled={disabled}
          className="text-white button-gradient px-6 py-2 md:py-2 md:px-6"
          onClick={handleSubmit}
        >
          Book call
        </button>
      </div>
    </div>
  );
};

export default SchedulingForm;

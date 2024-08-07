"use client";

import axios from "axios";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import Dropdown from "@/blocks/Dropdown/DropDown";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { JobFunctionMenu } from "@/constants/Scheduling/index";

import { sendGTMEvent } from "@next/third-parties/google";
import { updateWebAnalytics } from "@/functions/WebAnalytics";

interface IInput {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  designation: string;
  subject: string;
}

const SchedulingForm = () => {
  const [inputs, setInputs] = useState([
    { name: "name", value: "", placeholder: "Full Name", type: "text" },
    { name: "email", value: "", placeholder: "Work Email", type: "email" },
    { name: "phone", value: "", placeholder: "Phone number", type: "phone" },
    { name: "companyName", value: "", placeholder: "Company", type: "text" },
  ]);

  const [select, setSelect] = useState<string | null>(null);
  const { toast } = useToast();

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
        toast({
          variant: "destructive",
          description: "Please enter all the fields",
        });
        setDisabled(false);
        return;
      }
      data[i.name as keyof IInput] = i.value;
    });
    if (select == null) {
      toast({
        variant: "destructive",
        description: "Please enter all the fields",
      });
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
        toast({
          title: "Message Sent",
          description: "We will get back to you soon",
        });
        updateWebAnalytics({
          type: "CLICK_EVENT",
          eventId: "book_schedule_call",
        });
        sendGTMEvent({ event: "salesLead", value: 1 });
        resetInputs();
      } else {
        toast({
          variant: "destructive",
          description: "An error occured. Please try again later.",
        });
        setDisabled(false);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "An error occured. Please try again later.",
      });
      setDisabled(false);
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
    <div className="flex flex-col h-full p-4">
      <div className="flex flex-col py-9">
        <h3 className="text-primary-pink text-2xl font-medium">
          Schedule a call
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-4 md:gap-7 md:grid-cols-1 justify-end items-end">
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
            option={JobFunctionMenu}
            setSelect={handleSelect}
          />
        </div>
      </div>
      <div className="flex mt-9 items-start">
        <Button disabled={disabled} onClick={handleSubmit}>
          Book a call
        </Button>
      </div>
    </div>
  );
};

export default SchedulingForm;

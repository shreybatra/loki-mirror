"use client";

import DropDown from "@/blocks/Dropdown/DropDown";
import axios from "axios";
import { useEffect, useState } from "react";

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
    companyName: "",
    phone: "",
  };
  const [detail, setDetail] = useState(initialValues);
  const handleChange = (e: any) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };
  const [select, setSelect] = useState<string | null>(null);

  useEffect(() => {
    if (select) setDetail({ ...detail, subject: select });
  }, [select]);
  const handleSelect = (value: string) => {
    setSelect(value);
  };

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const sendData = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`,
        detail
      );

      if (response.status === 200) {
        setSuccess("Message sent successfully!");
        setDetail(initialValues);
        setTimeout(() => {
          setSuccess("");
          setError("");
        }, 1000);
      } else {
        setError("An error occured. Please try again later.");
      }
    } catch (error) {
      setError("An error occured. Please try again later.");
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      !detail.name ||
      !detail.email ||
      // !detail.message ||
      // !detail.subject ||
      !detail.companyName ||
      !detail.phone
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    await sendData();
  };

  return (
    <div className="mt-[24px] md:mt-[62px] w-[90%]  mb-[100px]  md:w-[738px] text-muted  md:mb-[161px]">
      <div className="contact-form text-white p-[16px] md:p-[32px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          <div className="flex flex-col">
            <div className="grid gap-[4px] mb-[20px] md:mb-[32px]">
              <label className="text-[14px]">Full Name</label>
              <input
                autoComplete="off"
                type="text"
                name="name"
                id=""
                value={detail.name}
                placeholder="Enter here"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="grid  gap-[4px]  md:mb-[32px] ">
              <label className="text-[14px]">Email ID</label>
              <input
                autoComplete="off"
                type="text"
                name="email"
                id=""
                placeholder="Enter Here"
                value={detail.email}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </div>
          <div className="">
            <div className="grid  gap-[4px] mb-[20px] md:mb-[32px] ">
              <label className="text-[14px]">Company</label>
              <input
                autoComplete="off"
                type="text"
                name="companyName"
                id=""
                value={detail.companyName}
                placeholder="Enter here"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="grid  gap-[4px] mb-[20px] md:mb-[32px] ">
              <label className="text-[14px]">Phone number</label>
              <input
                autoComplete="off"
                type="tel"
                pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                maxLength={12}
                name="phone"
                id=""
                required
                value={detail.phone}
                placeholder="Enter Here"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </div>
        </div>
        <div className="">
          <DropDown
            setSelect={handleSelect}
            className="button-dark mb-[20px] md:mb-[32px] !border-[1px] !border-[var(--contact-form-border)]"
            Menu={["x", "y", "z"]}
            tag="Subject"
          />
        </div>
        <div className="">
          <div className="grid gap-[4px] mb-[20px] md:mb-[32px]">
            <label className="text-[14px]">
              Message{" "}
              <span className="text-muted-foreground text-xs">(optional)</span>
            </label>
            <textarea
              autoComplete="off"
              placeholder="Message"
              name="message"
              value={detail.message}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="button-gradient w-[100%]  p-[16px]"
          type="submit"
        >
          Submit
        </button>
        {error && (
          <p className="text-red-500 font-semibold text-center">{error}</p>
        )}
        {success && (
          <p className="text-green-500 font-semibold text-center">{success}</p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;

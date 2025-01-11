"use client";

import DropDown from "@/blocks/Dropdown/DropDown";
import { updateWebAnalytics } from "@/functions/WebAnalytics";
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
        updateWebAnalytics({
          type: "CLICK_EVENT",
          eventId: "contact_us_filled",
        });
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
                placeholder="Enter your full name"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="grid  gap-[4px]  md:mb-[32px] ">
              <label className="text-[14px]">Work Email</label>
              <input
                autoComplete="off"
                type="text"
                name="email"
                id=""
                placeholder="Your email address"
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
                placeholder="Your company name"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="grid  gap-[4px] mb-[20px] md:mb-[32px] ">
              <label className="text-[14px]">Phone Number</label>
              <input
                autoComplete="off"
                type="tel"
                pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                maxLength={12}
                name="phone"
                id=""
                required
                value={detail.phone}
                placeholder="Where can we reach you out?"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </div>
        </div>
        <div className="grid gap-[4px]">
          <label className="text-[14px]">Subject</label>
          <DropDown
            setSelect={handleSelect}
            className="button-dark mb-[20px] md:mb-[32px] !border-[1px] !border-[var(--contact-form-border)] text-gray-400 text-md"
            option={[
              {
                label: "Cosmocloud Deploy - Need Demo",
                value: "Cosmocloud Deploy - Need Demo",
              },
              {
                label: "Cosmocloud Build - Need Demo",
                value: "Cosmocloud Build - Need Demo",
              },
              {
                label:
                  "I want to submit some feedback around the Cosmocloud platform",
                value:
                  "I want to submit some feedback around the Cosmocloud platform",
              },
              {
                label: "I am looking for job opportunities at Cosmocloud",
                value: "I am looking for job opportunities at Cosmocloud",
              },
              {
                label: "Other queries (I'll write my own)",
                value: "Other queries",
              },
            ]}
            tag="How can we help?"
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
              placeholder="Any requirements you want to share with us?"
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

"use client";

import axios from "axios";
import { useState } from "react";

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
    designation: "",
    companyName: "",
  };
  const [detail, setDetail] = useState(initialValues);
  const handleChange = (e: any) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const base = process.env.BASE_URL;
  const sendData = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
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
      !detail.message ||
      !detail.subject ||
      !detail.designation ||
      !detail.companyName
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    await sendData();
  };

  return (
    <div className="mt-[62px] w-[90%]  mb-[100px]  md:w-[738px] text-muted  md:mb-[161px]">
      <div className="contact-form text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          <div className="">
            <div className="grid  gap-[4px]  mb-[32px]">
              <label htmlFor="">Full Name</label>
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
            <div className="grid  gap-[4px] mb-[32px] ">
              <label htmlFor="">Email ID</label>
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
            <div className="grid  gap-[4px] mb-[32px] ">
              <label htmlFor="">Designation</label>
              <input
                autoComplete="off"
                type="text"
                name="designation"
                id=""
                value={detail.designation}
                placeholder="Enter here"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="grid  gap-[4px] mb-[32px] ">
              <label htmlFor="">Company Name</label>
              <input
                autoComplete="off"
                type="text"
                name="companyName"
                id=""
                value={detail.companyName}
                placeholder="Enter Here"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid  gap-[4px] mb-[32px]">
            <label htmlFor="">Subject</label>
            <input
              autoComplete="off"
              type="text"
              name="subject"
              id=""
              value={detail.subject}
              placeholder="Enter Here"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
        <div className="">
          <div className="grid gap-[4px] mb-[32px]">
            <label htmlFor="">Message</label>
            <textarea
              autoComplete="off"
              placeholder="Message"
              name="message"
              value={detail.message}
              onChange={(e) => {
                handleChange(e);
              }}
            ></textarea>
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

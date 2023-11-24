import ContactCard from "@/components/ContactUs/ContactCard";
import ContactForm from "@/components/ContactUs/ContactForm";
import ContactUsHeader from "@/components/ContactUs/ContactUsHeader";
import CosmocloudFullLogo from "@/assets/svg/cosmocloud-logo-full-dark.svg";
import { GetStarted } from "@/components/Landing";
import Image from "next/image";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";
import location from "@/assets/svg/location.svg";
import mail from "@/assets/svg/mail.svg";
import phoneImg from "@/assets/svg/phone.svg";

export default function Page() {
  return (
    <main className="flex flex-col items-center md:block">
      <ContactForm />
      <div className="flex flex-col gap-[24px]  items-center justify-center  ">
        <h3 className="text-primary-pink uppercase tracking-[5px] text-start text-[12px] md:text-[16px] md:text-center">
          GET IN TOUCH
        </h3>
        <div className="flex flex-row gap-[12px] justify-between items-center md:flex-col">
          <h2 className="font-[700] w-[250px] text-[20px] text-start md:text-[32px] md:w-[100vw] md:text-center">
            Give us a chance to help
          </h2>
        </div>
      </div>

      <div className="flex flex-wrap      md:ml-[169px]    md:mr-[169px]  gap-[42px]  md:gap-[48px]   mt-[64px]  mb-[161px] ">
        <ContactCard image={phoneImg} info={"Contact With Us"} data={""} />
        <ContactCard
          image={mail}
          info={"Email Support"}
          data={"support@cosmocloud.io"}
        />

        <ContactCard
          image={location}
          info={"Address"}
          data={
            "Wework Berger Delhi One, Sector 16B, Noida, U.P - 201301"
          }
        />

      </div>
      <div className="md:ml-[330px] md:mr-[330px]">
        <GetStarted />
      </div>
    </main>
  );
}

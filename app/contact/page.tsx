import ContactCard from "@/components/ContactUs/ContactCard";
import ContactForm from "@/components/ContactUs/ContactForm";
import { GetStarted } from "@/components/Landing";
import ContactBg from "@/assets/svg/contact-bg.svg";
import ContactUsHeader from "@/components/ContactUs/ContactUsHeader";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col items-center md:block">
      <div className="sm:none bg-contact">
        <Image src={ContactBg} alt="contact-bg" />
      </div>
      <ContactUsHeader />
      <ContactForm />
      <div className="flex flex-col gap-[24px] w-[90%] items-center justify-center items-center">
        <h3 className="text-primary-pink uppercase tracking-[5px] text-start text-[12px] md:text-[16px] md:text-center">
          GET IN TOUCH
        </h3>
        <div className="flex flex-row gap-[12px] justify-between items-center md:flex-col">
          <h2 className="font-[700] w-[250px] text-[20px] text-start md:text-[32px] md:w-[100vw] md:text-center">
            Give us a chance to help
          </h2>
        </div>
      </div>

      <div className="flex flex-wrap justify-center w-[90%] gap-[16px] md:gap-10 md:gap-10 mt-16 mb-[60px]">
        <ContactCard
          imageIcon={<FaEnvelope className="text-[32px] text-muted" />}
          info={"Email Support"}
          data={
            <a href="mailto:support@cosmocloud.io">support@cosmocloud.io</a>
          }
        />

        <ContactCard
          imageIcon={<FaLocationDot className="text-[32px] text-muted" />}
          info={"Address"}
          data={"Wework Berger Delhi One, Sector 16B, Noida, U.P - 201301"}
        />
        <ContactCard
          imageIcon={<IoIosCall className="text-[32px] text-muted" />}
          info={"Contact Us"}
          data={"+91 9818444464"}
        />
        
      </div>
      <div className="flex flex-col items-center gap-[100px] w-[90%] md:gap-[190px]">
        <GetStarted />
      </div>
    </main>
  );
}

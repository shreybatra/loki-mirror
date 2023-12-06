import "./contactUs.css";

import ContactBg from "@/assets/svg/contact-bg.svg";
import ContactUsHeader from "@/components/ContactUs/ContactUsHeader";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:ml-[80px]">
      <div className="sm:none bg-contact">
        <Image src={ContactBg} alt="contact-bg" />
      </div>
      <ContactUsHeader />
      {children}
    </div>
  );
}

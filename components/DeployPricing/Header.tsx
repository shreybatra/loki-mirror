"use client";
import SchedulingModal from "../Scheduling/SchedulingModal";
const Header = () => {
  return (
    <div className="flex flex-col gap-[56px] mt-[100px] items-center justify-center ">
      <div className="flex flex-col items-center gap-[24px] w-full">
        <div className="text-[22px] md:max-w-[28rem] md:text-[32px] lg:text-[48px] font-[700]">
          <h2 className="text-center">
            Flat pricing for <br />
            <span>
              your
              <span className="text-gradient font-[800]">
                {" "}
                entire tech team{" "}
              </span>
            </span>
          </h2>
        </div>
        <p className="text-muted text-center">
          Make your developers{" "}
          <span className="text-gradient font-bold">10x</span> more productive.
          Build your app&apos;s backend{" "}
          <span className="text-gradient font-bold">in minutes</span>.
        </p>
      </div>
      <div className="flex flex-col items-center gap-[12px] md:flex-row   text-center md:justify-center    mt-[56px]">
        <SchedulingModal
          btnText="Check Enterprise Plans"
          cName="button-dark border-background md:mr-[16px] text-[16px] px-[24px] py-[12px] md:py-[14px]"
        />

        <button className="button-gradient px-[18px] py-[9px]  md:py-[12px] md:px-[24px]">
          Estimate your project cost
        </button>
      </div>
    </div>
  );
};

export default Header;

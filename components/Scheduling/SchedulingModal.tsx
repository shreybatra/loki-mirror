import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SchedulingForm from "./SchedulingForm";
import TestimonialCarousel from "./TestimonialCarousel";

export interface IDemoProps {
  cName: string;
  btnText?: string;
}

const SchedulingModal = ({ cName, btnText = "Book a demo" }: IDemoProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={cName}>{btnText}</button>
      </DialogTrigger>
      <DialogContent className="text-white !py-0 !pr-0 md:max-w-[70%] max-w-[90%] max-h-[80%] bg-[var(--bg-black-light)] border-none bg-none">
        <div className="flex md:justify-between flex-col md:flex-row items-center">
          <div className="hidden md:block md:w-1/2 md:border-r-2 md:border-gray-600">
            <TestimonialCarousel />
          </div>

          <div className="md:w-1/2 w-full">
            <SchedulingForm />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SchedulingModal;

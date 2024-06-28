import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SchedulingForm from "./SchedulingForm";
import TestimonialCarousel from "./TestimonialCarousel";

export interface IDemoProps {
  className: string;
  isDisabled?: boolean;
}

const SchedulingModal = ({ className }: IDemoProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={className}>Book a demo</button>
      </DialogTrigger>
      <DialogContent className="text-white !py-0 !pr-0 md:max-w-[70vw] bg-[var(--bg-black-light)] border-none bg-none">
        <div className="flex justify-between">
          <div className="w-1/2 border-r-2 border-gray-600">
            <TestimonialCarousel />
          </div>

          <div className="w-1/2">
            <SchedulingForm />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SchedulingModal;

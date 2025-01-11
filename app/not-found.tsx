import { NewDefaultPage } from "@/components/NewDefaultPage";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <NewDefaultPage>
      <div className="w-full px-4 md:px-40 h-[90vh] flex flex-col justify-center items-center gap-4">
        <div className="w-full flex justify-center">
          <h2 className="text-2xl text-gradient font-bold w-fit">Not Found</h2>
        </div>
        <p>Could not find requested resource</p>
        <Link href="/">
          <Button>Go back to home</Button>
        </Link>
      </div>
    </NewDefaultPage>
  );
}

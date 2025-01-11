import { DefaultPage } from "@/components/DefaultPage";
import "./contactUs.css";
import { NewDefaultPage } from "@/components/NewDefaultPage";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NewDefaultPage>
      <div className="flex w-[100%] flex-col md:ml-20">{children}</div>
    </NewDefaultPage>
  );
}

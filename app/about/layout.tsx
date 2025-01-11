import { DefaultPage } from "@/components/DefaultPage";
import "./about.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DefaultPage>
      <div className="">{children}</div>
    </DefaultPage>
  );
}

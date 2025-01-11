import { DefaultPage } from "@/components/DefaultPage";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DefaultPage>
      <div className="flex flex-col md:mx-[80px]">{children}</div>
    </DefaultPage>
  );
}

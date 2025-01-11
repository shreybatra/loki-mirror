import { DefaultPage } from "@/components/DefaultPage";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DefaultPage>
      <div className="flex w-[100%] flex-col">{children}</div>
    </DefaultPage>
  );
}

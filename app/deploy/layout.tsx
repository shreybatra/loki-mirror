import { NewDefaultPage } from "@/components/NewDefaultPage";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NewDefaultPage>
      <div className="flex w-[100%] flex-col">{children}</div>
    </NewDefaultPage>
  );
}

import "./contactUs.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex w-[90%] flex-col md:ml-20">{children}</div>;
}

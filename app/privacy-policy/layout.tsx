export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col md:mx-[80px]">{children}</div>;
}

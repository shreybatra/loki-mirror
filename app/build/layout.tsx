export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex w-[100%] flex-col">{children}</div>;
}

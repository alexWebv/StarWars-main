export default function DashboardPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=" flex min-h-screen flex-col">
      <header className="text-white flex h-20 items-center justify-center gap-[50px] bg-black">
        <span>TestGrapthApI</span>
        <span>By Sashko</span>
      </header>
      <div className="flex h-full flex-1  flex-row ">{children}</div>
    </main>
  );
}

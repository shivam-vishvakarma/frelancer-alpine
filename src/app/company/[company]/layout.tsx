import CompanyHeader from "@/components/CompanyHeader";

export default function CompanyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <CompanyHeader />
      {children}
    </section>
  );
}

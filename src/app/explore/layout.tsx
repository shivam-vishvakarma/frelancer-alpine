import Image from "next/image";

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <section className="text-center py-20 relative flex flex-col items-center justify-center gap-4">
        <Image src={"/domains_banner.png"} width={1920} height={1080} alt="" className="w-full h-full object-cover absolute inset-0 -z-10" />
        <h3 className="uppercase text-3xl md:text-5xl">dESIGN yOUR wEBSITE</h3>
        <p className="px-4 sm:w-1/2 lg:w-1/3">
          Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in
          scelerisque leo, eget sollicitudin velit bestibulum.
        </p>
      </section>
      {children}
    </main>
  );
}

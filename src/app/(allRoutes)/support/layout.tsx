import ComponentByRoutes from "@/components/ComponentByRoutes";
import SupportNavigation from "@/components/SupportNavigation";
import SupportRecent from "@/components/SupportRecent";
import ViewFilter from "@/components/ViewFilter";

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-screen-xl mx-auto p-4 grid gap-4 grid-cols-12">
      <div className="col-span-3 space-y-5">
        <ComponentByRoutes
          componentList={[
            {
              route: "/support",
              component: <ViewFilter />,
            },
            {
              route: "/support/open",
              component: <SupportRecent />,
            },
          ]}
        />
        <SupportNavigation />
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
}

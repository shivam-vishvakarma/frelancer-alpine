import Header from "@/components/Header";
import SideBar from "./components/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-gray-100">
      <SideBar />
      <main className="flex-1 h-screen overflow-y-auto">
        <Header isOnDashboard />
        {children}
      </main>
    </div>
  );
}

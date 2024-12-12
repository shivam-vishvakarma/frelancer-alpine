import Divider from "@/components/Divider";
import OrderTable from "@/components/OrderTable";
import Pagination from "@/components/Pagination";

export default function MyOrdersPage() {
  return (
    <div className="space-y-2">
      <div className="flex gap-1 md:gap-4">
        <button className="p-2 bg-primary rounded-full text-xs text-white">
          Active Orders
        </button>
        <button className="p-2 rounded-full text-xs bg-white">
          Paused Orders
        </button>
        <button className="p-2 rounded-full text-xs bg-white">
          Completed Orders
        </button>
      </div>
      <Divider />
      <div className="shadow-lg rounded-lg overflow-hidden">
        <OrderTable />
      </div>
      <Pagination />
    </div>
  );
}

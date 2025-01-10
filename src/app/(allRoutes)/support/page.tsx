import Pagination from "@/components/Pagination";
import SupportTable from "@/components/SupportTable";
import { IoSearch } from "react-icons/io5";

export default function SupportPage() {
  return (
    <div className="bg-white border-2 border-primary-dark shadow-md rounded-md p-4">
      <div className="p-2 flex justify-between items-center">
        <p className="text-sm font-poppins">Showing 1 to 10 of 100 entries</p>
        <label className="flex items-center justify-center gap-2 bg-white rounded-md p-1 border-2 border-primary-dark">
          <IoSearch className="text-primary-dark text-xl" />
          <input
            type="search"
            name="supportSearch"
            id="supportSearch"
            placeholder="Search"
            className="border-none outline-none focus:ring-0 p-0"
          />
        </label>
      </div>
      <div>
        <SupportTable />
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
}

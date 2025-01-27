import InfoCard from "@/components/InfoCard";
import OrderTable from "@/components/OrderTable";
import SupportTable from "@/components/SupportTable";
import OpenModal from "../../components/OpenModal";
import InfoCardBox from "@/components/InfoCardBox";

export default function DashboardPage() {
  return (
    <section className="p-5">
      <OpenModal />
      <div className="flex justify-evenly md:w-4/5 mx-auto">
        <InfoCard title="Total Projects" value="99+" color="#F76B15" />
        <InfoCard title="Bids Accepted" value="50+" color="#E5484D" />
        <InfoCard title="Total Revenue" value="2.4L" color="#3E63DD" />
        <InfoCard title="Specializations" value="4" color="#7CE2FE" />
      </div>
      <div className="flex justify-evenly md:w-4/5 mx-auto">
        <InfoCardBox title="Total Projects" value="99+" color="#F76B15" />
        <InfoCardBox title="Bids Accepted" value="50+" color="#E5484D" />
        <InfoCardBox title="Total Revenue" value="2.4L" color="#3E63DD" />
        <InfoCardBox title="Specializations" value="4" color="#7CE2FE" />
      </div>
      <div className="flex justify-evenly md:w-4/5 mx-auto gap-2 mt-5">
        <InfoCardBox
          title="Total Projects"
          value="99+"
          color="#F76B15"
          rounded
        />
        <InfoCardBox
          title="Bids Accepted"
          value="50+"
          color="#E5484D"
          rounded
        />
        <InfoCardBox
          title="Total Revenue"
          value="2.4L"
          color="#3E63DD"
          rounded
        />
        <InfoCardBox
          title="Specializations"
          value="4"
          color="#7CE2FE"
          rounded
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <div className="bg-white p-2">
          <h3 className="text-2xl uppercase font-semibold my-3 text-center text-primary-dark">
            Recent Orders
          </h3>
          <OrderTable />
        </div>
        <div className="bg-white p-2">
          <h3 className="text-2xl uppercase font-semibold my-3 text-center text-primary-dark">
            Support Tickets
          </h3>
          <SupportTable />
        </div>
      </div>
    </section>
  );
}

import Divider from "@/components/Divider";
import MilestoneTable from "@/components/MilestoneTable";
import UserFileCard from "@/components/UserFileCard";

export default function MilestoneOverview() {
  return (
    <section>
      <div className="p-4 rounded-xl border shadow-sm flex *:px-4 flex-col gap-2 sm:flex-row justify-between flex-wrap">
        <div className="sm:space-y-2">
          <p className="text-secondary text-sm">Project Price</p>
          <p className="font-semibold">$2500.00</p>
          <p className="text-secondary text-sm">Fixed-price</p>
        </div>
        <div className="sm:space-y-2">
          <p className="text-secondary text-sm">In escrow</p>
          <p className="font-semibold">$0.00</p>
        </div>
        <div className="sm:space-y-2">
          <p className="text-secondary text-sm">Milestones paid (7)</p>
          <p className="font-semibold">$1500.00</p>
        </div>
        <div className="sm:space-y-2">
          <p className="text-secondary text-sm">Milestones remaining (0)</p>
          <p className="font-semibold">$0.00</p>
        </div>
        <div className="sm:space-y-2 border-t sm:border-t-0 sm:border-l">
          <p className="text-secondary text-sm">Total earnings</p>
          <p className="font-semibold">$1500.00</p>
        </div>
      </div>
      <section className="grid grid-cols-12 my-4 gap-4">
        {/* left section */}
        <div className="col-span-12 md:col-span-8 space-y-2">
          <h2>Milestone timeline</h2>
          <div className="flex gap-4 items-center">
            <button className="text-primary text-sm underline underline-offset-4">
              See all upcoming milestones
            </button>
            <button className="text-xs border border-primary rounded p-1 text-primary">
              Manage milestones
            </button>
          </div>
          <div className="pt-2">
            <MilestoneTable />
          </div>
        </div>
        {/* right section */}
        <div className="col-span-4 hidden md:block">
          <div className="border rounded-xl">
            <div className="flex p-2 gap-2 justify-end">
              <p className="text-xl font-semibold mr-auto">Recent files</p>
              <button className="border p-2 size-8 rounded-full border-primary">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9333 0L9.6 0V5.33333H10.6667V1.6C13.1733 2.63467 14.9333 5.10933 14.9333 8C14.9333 11.8187 11.8293 14.9333 8 14.9333C6.16117 14.9333 4.39764 14.2029 3.09739 12.9026C1.79714 11.6024 1.06667 9.83883 1.06667 8C1.06667 4.71467 3.34933 1.96267 6.4 1.248V0.149333C2.752 0.896 0 4.11733 0 8C0 12.4053 3.584 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.03467 14.4 2.45333 12.0107 1.06667H14.9333V0Z"
                    fill="#13544E"
                  />
                </svg>
              </button>
              <button className="border px-2 rounded border-primary">
                Upload
              </button>
            </div>
            <div className="p-2 space-y-2">
              <UserFileCard />
              <Divider />
              <UserFileCard />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

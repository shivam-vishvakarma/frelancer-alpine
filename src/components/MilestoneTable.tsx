import MilestoneTableRow from "./MilestoneTableRow";

export default function MilestoneTable() {
  return (
    <table className="w-full rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-gray-100">
          <th className="text-secondary p-2 font-medium text-sm text-start">
            Stage
          </th>
          <th className="text-secondary p-2 font-medium text-sm text-start max-sm:hidden">
            Amount
          </th>
          <th className="text-secondary p-2 font-medium text-sm text-start">
            Status
          </th>
          <th className="text-secondary p-2 font-medium text-sm text-start max-xs:hidden">
            Due date
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        <MilestoneTableRow />
        <MilestoneTableRow />
        <MilestoneTableRow />
        <MilestoneTableRow />
        <MilestoneTableRow />
        <MilestoneTableRow />
        <MilestoneTableRow />
        <MilestoneTableRow />
        <MilestoneTableRow />
        <MilestoneTableRow />
      </tbody>
    </table>
  );
}

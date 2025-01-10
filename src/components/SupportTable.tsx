import SupportTableRow from "./SupportTableRow";

export default function SupportTable() {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-primary-light text-primary-dark font-rokkitt">
          <th className="p-2 font-medium text-sm text-start"> Department</th>
          <th className="p-2 font-medium text-sm text-start">Subject</th>
          <th className="p-2 font-medium text-sm text-start">Status</th>
          <th className="p-2 font-medium text-sm text-start max-sm:hidden">
            Last Updated
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        <SupportTableRow />
        <SupportTableRow />
        <SupportTableRow />
        <SupportTableRow />
        <SupportTableRow />
        <SupportTableRow />
        <SupportTableRow />
        <SupportTableRow />
        <SupportTableRow />
      </tbody>
    </table>
  );
}

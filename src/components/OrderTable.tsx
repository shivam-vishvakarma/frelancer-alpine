import OrderTableRow from "./OrderTableRow";

export default function OrderTable() {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-gray-100">
          <th className="text-secondary p-2 font-medium text-sm text-start">
            Project Title
          </th>
          <th className="text-secondary p-2 font-medium text-sm text-start max-sm:hidden">
            Client/Agency
          </th>
          <th className="text-secondary p-2 font-medium text-sm text-start">
            Due Date
          </th>
          <th className="text-secondary p-2 font-medium text-sm text-start max-xs:hidden">
            Amount
          </th>
          <th className="text-secondary p-2 font-medium text-sm text-start">
            Status
          </th>
          <th className="text-secondary p-2 font-medium text-sm text-start max-md:hidden">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        <OrderTableRow />
        <OrderTableRow />
        <OrderTableRow />
        <OrderTableRow />
        <OrderTableRow />
        <OrderTableRow />
        <OrderTableRow />
      </tbody>
    </table>
  );
}

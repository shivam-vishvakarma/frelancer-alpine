import StatusBadge from "./StatusBadge";

export default function OrderTableRow() {
  return (
    <tr>
      <td className="border-b border-gray-200 py-2 text-sm truncate px-2">
        UI/UX Design
      </td>
      <td className="border-b border-gray-200 py-2 text-sm truncate px-2 max-sm:hidden">
        Shivam
      </td>
      <td className="border-b border-gray-200 py-2 text-sm truncate px-2">
        20 Dec 2024
      </td>
      <td className="border-b border-gray-200 py-2 text-sm truncate px-2 max-xs:hidden">
        ₹ 1200
      </td>
      <td className="border-b border-gray-200 py-2 text-sm truncate px-2">
        <StatusBadge status="Active" />
      </td>
      <td className="border-b border-gray-200 py-2 text-sm truncate px-2 max-md:hidden">
        Action
      </td>
    </tr>
  );
}

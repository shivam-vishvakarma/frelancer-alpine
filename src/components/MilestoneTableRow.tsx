import StatusBadge from "./StatusBadge";

export default function OrderTableRow() {
  return (
    <tr>
      <td className="border-b border-gray-200 py-2 text-sm truncate px-2">
        Week 1
      </td>
      <td className="border-b border-gray-200 py-2 text-sm truncate px-2 max-sm:hidden">
        ₹ 70
      </td>
      <td className="border-b border-gray-200 py-2 text-sm truncate px-2 max-xs:hidden">
        Paid
      </td>
      <td className="border-b border-gray-200 py-2 text-sm truncate px-2">
        20 Dec 2024
      </td>
    </tr>
  );
}

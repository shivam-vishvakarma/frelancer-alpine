import StatusBadge from "./StatusBadge";

export default function SupportTableRow() {
  return (
    <tr>
      <td className="border-b border-gray-200 py-2 text-sm truncate px-2">
        General Query
      </td>
      <td className="border-b border-gray-200 py-2 text-sm truncate px-2">
        How to reset password?
      </td>
      <td className="border-b border-gray-200 py-2 text-sm truncate px-2">
        <StatusBadge status="Open" />
      </td>
      <td className="border-b border-gray-200 py-2 text-sm truncate px-2 max-sm:hidden">
        20 Dec 2024
      </td>
    </tr>
  );
}

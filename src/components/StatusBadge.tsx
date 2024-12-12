export default function StatusBadge({
  status,
}: {
  status: "Active" | "Paused" | "Completed";
}) {
  return (
    <span
      className={`px-2 py-1 text-xs font-semibold rounded-full ${
        status === "Active"
          ? "bg-green-100 text-green-800"
          : status === "Paused"
            ? "bg-yellow-100 text-yellow-800"
            : "bg-blue-100 text-blue-800"
      }`}
    >
      {status}
    </span>
  );
}

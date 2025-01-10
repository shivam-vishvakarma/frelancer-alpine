export default function StatusBadge({
  status,
}: {
  status: "Active" | "Paused" | "Completed" | "Open" | "Closed" | "Answered";
}) {
  const bgColor = {
    Active: "bg-green-100 text-green-800",
    Paused: "bg-yellow-100 text-yellow-800",
    Completed: "bg-blue-100 text-blue-800",
    Open: "bg-yellow-100 text-yellow-800",
    Closed: "bg-red-100 text-red-800",
    Answered: "bg-green-100 text-green-800",
  };
  return (
    <span
      className={`px-2 py-1 text-xs font-semibold rounded-full ${bgColor[status]}`}
    >
      {status}
    </span>
  );
}

"use client";

import { useRouter } from "next/navigation";

export default function Pagination() {
  const router = useRouter();
  const page = 1;
  const totalPages = 3;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page: number) => {
    router.push("?page=" + page);
  };

  return (
    <div className="flex justify-center gap-4 py-4">
      <button
        className="px-4 py-2 font-semibold rounded text-xs bg-primary-dark text-white"
        onClick={() => handlePageChange(page - 1)}
      >
        Prev
      </button>
      {pages.map((p) => (
        <button
          key={p}
          className={`px-4 py-2 font-semibold rounded text-xs ${
            p === page ? "bg-primary-dark text-white" : "bg-white"
          }`}
          onClick={() => handlePageChange(p)}
        >
          {p}
        </button>
      ))}
      <button
        className="px-4 py-2 font-semibold rounded text-xs bg-primary-dark text-white"
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

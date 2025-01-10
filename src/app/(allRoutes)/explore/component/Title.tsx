"use client";

import { usePathname } from "next/navigation";

export default function Title() {
  const pathname = usePathname();

  return pathname.includes("company")
    ? "Customize your own project"
    : "dESIGN yOUR wEBSITE";
}

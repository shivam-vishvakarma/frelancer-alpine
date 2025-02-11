"use client";

import { useToggles } from "@/lib/hooks/context/togglesContext";
import { MdFilterList } from "react-icons/md";

export default function ToggleBtn() {
  const { openFiltersToggle } = useToggles();
  return (
    <button
      className="px-2 text-xs md:text-base md:hidden font-medium hover:text-primary-dark border-2 bg-white border-primary-dark rounded-md flex items-center justify-center gap-1 active:bg-primary-light active:text-primary-dark transition-all duration-100"
      onClick={openFiltersToggle}
    >
      <MdFilterList />
      <span>Filters</span>
    </button>
  );
}

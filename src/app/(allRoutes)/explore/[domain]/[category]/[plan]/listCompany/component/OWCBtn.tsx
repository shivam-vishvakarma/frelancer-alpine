"use client";

import { useToggles } from "@/hooks/context/togglesContext";

export default function OWCBtn() {
  const { openCustomizationModal } = useToggles();
  return (
    <button
      className="flex justify-center items-center border-2 border-primary-dark px-1 font-semibold rounded-md group transition-all duration-300 text-white bg-primary-dark hover:bg-primary-light hover:text-primary-dark"
      onClick={() =>
        openCustomizationModal([
          "Feature 1",
          "Feature 2",
          "Feature 3",
          "Feature 4",
          "Feature 5",
        ])
      }
    >
      Order With Customization
    </button>
  );
}
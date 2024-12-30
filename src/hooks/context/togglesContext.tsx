"use client";

import { createContext, useContext, useState } from "react";

type ToggleContextType = {
  openFilters: boolean;
  openFiltersToggle: () => void;
};

const TogglesContext = createContext<ToggleContextType>(
  {} as ToggleContextType
);

export default function ToggleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openFilters, setOpenFilters] = useState(false);

  function openFiltersToggle() {
    setOpenFilters(!openFilters);
  }

  return (
    <TogglesContext.Provider value={{ openFilters, openFiltersToggle }}>
      {children}
    </TogglesContext.Provider>
  );
}

export const useToggles = () => {
  const context = useContext(TogglesContext);
  if (!context) {
    throw new Error("useToggles must be used within a TogglesProvider");
  }
  return context;
};

"use client";

import { createContext, useContext, useState } from "react";

type ToggleContextType = {
  openFilters: boolean;
  openFiltersToggle: () => void;
  customizationModal: boolean;
  customizationModalData: string[] | undefined;
  openCustomizationModal: (data: string[]) => void;
  closeCustomizationModal: () => void;
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
  const [customizationModal, setCustomizationModal] = useState(false);
  const [customizationModalData, setCustomizationModalData] = useState<
    string[] | undefined
  >([]); // This is just an example, you can set any type of data

  function openFiltersToggle() {
    setOpenFilters(!openFilters);
  }

  function openCustomizationModal(data?: string[]) {
    setCustomizationModalData(data);
    setCustomizationModal(true);
  }

  function closeCustomizationModal() {
    setCustomizationModalData(undefined);
    setCustomizationModal(false);
  }

  return (
    <TogglesContext.Provider
      value={{
        openFilters,
        openFiltersToggle,
        customizationModal,
        openCustomizationModal,
        closeCustomizationModal,
        customizationModalData,
      }}
    >
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

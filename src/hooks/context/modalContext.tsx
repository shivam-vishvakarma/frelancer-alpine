"use client";

import { createContext, useContext, useState } from "react";

export type ModalContextType = {
  isOpen: boolean;
  variant: "profileCompletion" | "planForm" | "imageCarousel";
  isClosable: boolean;
  images: string[];
  openModal: (
    variant: "profileCompletion" | "planForm" | "imageCarousel",
    closable?: boolean,
    images?: string[]
  ) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType>({} as ModalContextType);

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [variant, setVariant] =
    useState<ModalContextType["variant"]>("profileCompletion");
  const [isClosable, setIsClosable] = useState(true);
  const [images, setImages] = useState<ModalContextType["images"]>([]);

  function openModal(
    variant: ModalContextType["variant"],
    closable = true,
    images?: string[]
  ) {
    setIsOpen(true);
    if (variant) {
      setVariant(variant);
      closable = false;
    }
    if (images) {
      setImages(images);
    }
    setIsClosable(closable);
  }

  function closeModal() {
    setIsOpen(false);
    setImages([]);
  }

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal,
        isClosable,
        images,
        variant,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

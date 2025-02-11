"use client";

import { ModalContextType, useModal } from "@/lib/hooks/context/modalContext";
import { useEffect } from "react";

export default function OpenModal({
  varient = "profileCompletion",
}: {
  varient?: ModalContextType["variant"];
}) {
  const { openModal } = useModal();
  useEffect(() => {
    openModal(varient);
  }, [varient]);
  return null;
}

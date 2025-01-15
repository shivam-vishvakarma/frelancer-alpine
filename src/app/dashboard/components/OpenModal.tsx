"use client";

import { useModal } from "@/hooks/context/modalContext";
import { useEffect } from "react";

export default function OpenModal() {
  const { openModal } = useModal();
  useEffect(() => {
    openModal();
  }, []);
  return null;
}

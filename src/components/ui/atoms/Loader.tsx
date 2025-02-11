"use client";

import { useLoader } from "@/lib/hooks/context/loaderContext";
import { Spinner } from "flowbite-react";

export const Loader = () => {
  const { isLoading } = useLoader();
  if (isLoading) {
    return (
      <div className="fixed z-20 inset-0 bg-black/20 flex items-center justify-center">
        <Spinner className="size-24" color="success" />
      </div>
    );
  }
};

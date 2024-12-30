"use client";

import { usePathname, useSearchParams } from "next/navigation";

export const changeSearchParam = function (key: string, value: string) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  params.set(key, value);
  return `${pathname}?${params.toString()}`;
};

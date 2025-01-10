"use client";

import { usePathname } from "next/navigation";

interface Props {
  componentList: { route: string; component: React.ReactNode }[];
}

export default function ComponentByRoutes({ componentList }: Props) {
  const pathname = usePathname();
  const component = componentList.find((c) => c.route === pathname);
  return <>{component?.component}</>;
}

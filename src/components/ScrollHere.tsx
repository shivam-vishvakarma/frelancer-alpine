"use client";

import { useEffect, useRef } from "react";

export default function ScrollHere({ target }: { target: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [target]);

  return <div ref={ref} />;
}

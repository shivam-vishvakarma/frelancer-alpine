import { Poppins, Rokkitt } from "next/font/google";

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["sans-serif"],
  style: ["normal"],
});

export const rokkitt = Rokkitt({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["sans-serif"],
  style: ["normal"],
});

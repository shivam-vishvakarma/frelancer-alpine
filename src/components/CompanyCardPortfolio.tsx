"use client";

import { useModal } from "@/lib/hooks/context/modalContext";
import PrevImage from "./PrevImage";

export default function CompanyCardPortfolio({ images }: { images: string[] }) {
  const { openModal } = useModal();
  const handleClick = () => {
    openModal("imageCarousel", true, images);
  };
  return (
    <div className="flex gap-1 h-full">
      {images.map((img, index) => (
        <PrevImage key={index} src={img} onClick={handleClick} />
      ))}
    </div>
  );
}

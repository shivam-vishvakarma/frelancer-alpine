import Image from "next/image";

export default function PrevImage({
  src,
  onClick,
}: {
  src: string;
  onClick?: () => void;
}) {
  return (
    <div className="aspect-square h-full cursor-pointer" onClick={onClick}>
      <Image
        src={src}
        alt=""
        height={100}
        width={100}
        className="object-cover w-full h-full"
      />
    </div>
  );
}

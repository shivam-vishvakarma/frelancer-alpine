import Image from "next/image";

type GalleryCardProps = {
  mainImg: string;
  sideImg1?: string;
  sideImg2?: string;
  sideImg3?: string;
};

const colorPaterns = [
  "/color_patern.png",
  "/color_patern_1.png",
  "/color_patern_2.png",
];

const getRandomColorPatern = () => {
  return colorPaterns[Math.floor(Math.random() * colorPaterns.length)];
};

export default function GalleryCard({
  mainImg,
  sideImg1 = getRandomColorPatern(),
  sideImg2 = getRandomColorPatern(),
  sideImg3 = getRandomColorPatern(),
}: GalleryCardProps) {
  return (
    <div className="grid grid-cols-6 grid-rows-3 aspect-[16/6] gap-1 md:gap-4">
      <div className="col-span-4 row-span-3 rounded-md overflow-hidden">
        <Image
          src={mainImg}
          alt="gallery"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="col-span-2 row-span-1 rounded-md overflow-hidden">
        <Image
          src={sideImg1}
          alt="gallery"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="col-span-2 row-span-1 rounded-md overflow-hidden">
        <Image
          src={sideImg2}
          alt="gallery"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="col-span-2 row-span-1 rounded-md overflow-hidden">
        <Image
          src={sideImg3}
          alt="gallery"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

import Image from "next/image";

export default function UserFileCard() {
    return (
      <div className="flex-col justify-start items-start gap-4 inline-flex">
        <div className="flex-col justify-start items-start gap-2 flex">
          <div className="text-secondary text-sm font-medium font-poppins">
            Mon, Aug 12 (99 days ago)
          </div>
          <div className="justify-start size-10 items-start gap-4 inline-flex">
            <Image
              className="w-full h-full object-cover rounded-full"
              height={50}
              width={50}
              alt=""
              src="/company_founder.jpg"
            />
            <div className="flex-col justify-center items-start flex">
              <div className="font-semibold text-sm text-nowrap font-poppins">
                Jimmy Anderson
              </div>
              <div className="text-secondary text-sm font-medium font-poppins">
                8:42 PM
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-2 flex">
          <div className="justify-center items-center gap-2 inline-flex">
            <div className="text-secondary text-base font-medium font-poppins">
              1 file
            </div>
            <div className="w-5 h-5 flex-col justify-center items-center gap-2 inline-flex">
              <Image src="/arrow-icon.svg" width={20} height={20} alt="" />
            </div>
          </div>
          <div className="self-stretch justify-between gap-6 items-center flex">
            <div className="justify-start items-center gap-4 flex">
              <img
                className="size-[50px] rounded-full"
                src="https://via.placeholder.com/50x50"
              />
              <div className="flex-col justify-center items-start gap-1 inline-flex">
                <div className="text-sm font-medium font-poppins">
                  Name of the file ...
                </div>
                <div className="text-secondary text-xs font-medium font-poppins">
                  101.32 kB
                </div>
              </div>
            </div>
            <div className="justify-between items-center flex gap-2">
              <button className="size-4 relative">
                <Image
                  src="/link_icon.svg"
                  className="w-full h-full object-contain"
                  width={20}
                  height={20}
                  alt=""
                />
              </button>
              <button className="size-6 relative">
                <Image
                  src="/download_icon.svg"
                  className="w-full h-full object-contain"
                  width={20}
                  height={20}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
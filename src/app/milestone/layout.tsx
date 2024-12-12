"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MilestoneLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <section className="w-full">
      <div className="w-full max-w-screen-xl mx-auto pt-5 space-y-5 px-2">
        <div className="p-2 sm:px-8 sm:pt-8 bg-green-800 text-white rounded-xl lg:w-2/3 mx-auto space-y-2 sm:space-y-4">
          <div className="flex justify-between items-center">
            <p className="md:text-xl w-3/4">Meta and TikTok Ads Expert</p>
            <button>
              <Image
                src={"/user_profile_dots.svg"}
                alt=""
                height={30}
                width={30}
              />
            </button>
          </div>
          <div className="flex justify-start items-center gap-4">
            <div className="size-10 sm:size-16 relative rounded-full overflow-hidden">
              <Image
                src={"/company_founder.jpg"}
                alt=""
                className="w-full h-full object-cover"
                height={100}
                width={100}
              />
            </div>
            <div className="space-y-2">
              <h3 className="sm:text-xl underline underline-offset-8">
                Jimmy A.
              </h3>
              <p className="text-xs">United Kingdom. Tue 11:27 AM</p>
            </div>
          </div>
          <nav className="font-semibold gap-2 text-xs  xs:text-base sm:gap-4 flex pb-2 text-nowrap">
            <Link
              href="/milestone"
              className={`${pathName === "/milestone" && "text-green-300 underline underline-offset-8"}`}
            >
              Overview
            </Link>
            <Link
              href="/milestone/messages"
              className={`${pathName === "/milestone/messages" && "text-green-300 underline underline-offset-8"}`}
            >
              Messages
            </Link>
            <Link
              href="/milestone/contracts"
              className={`${pathName === "/milestone/contracts" && "text-green-300 underline underline-offset-8"}`}
            >
              Contracts Details
            </Link>
          </nav>
        </div>
        <div className="lg:w-2/3 mx-auto">{children}</div>
      </div>
    </section>
  );
}

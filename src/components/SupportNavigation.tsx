"use client";

import { IoIosArrowDown } from "react-icons/io";
import Divider from "./Divider";
import { TiSupport } from "react-icons/ti";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTicket } from "react-icons/fa6";
import { IoChatbubbleSharp } from "react-icons/io5";

export default function SupportNavigation() {
  const pathname = usePathname();
  const getClassNames: (path: string) => string = (path: string) => {
    return `justify-start items-center gap-1 flex p-1 px-2 ${pathname === path && "bg-primary-dark text-white"}`;
  };
  return (
    <details
      className="group rounded-md overflow-hidden border-2 border-primary-dark shadow-md"
      open
    >
      <summary className="flex items-center gap-2 cursor-pointer bg-white p-2 text-primary-dark">
        <TiSupport className="text-primary-dark text-xl" />
        <span className="text-lg font-poppins">Support</span>
        <IoIosArrowDown className="text-primary-dark text-lg group-open:rotate-180 transition-all duration-100 ml-auto" />
      </summary>
      <Divider />
      <div className="bg-white flex flex-col gap-1 *:flex *:items-center *:justify-start *:gap-2">
        <Link href={"/support"} className={getClassNames("/support")}>
          <FaTicket className="text-lg" />
          <span>My Support Tickets</span>
        </Link>
        <Link href={"/support/open"} className={getClassNames("/support/open")}>
          <IoChatbubbleSharp className="text-lg" />
          <span>Open Tickets</span>
        </Link>
      </div>
    </details>
  );
}

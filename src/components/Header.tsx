"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  return (
    <header className="bg-white shadow sticky z-10 top-0">
      <div className="w-full max-w-screen-xl mx-auto px-10 py-5 justify-between items-center flex">
        <div className="justify-start items-center gap-10 flex">
          <Link
            href={"/"}
            className="text-primary text-2xl font-semibold font-poppins"
          >
            LOGO
          </Link>
          <nav
            className={`justify-start items-center gap-6 flex fixed md:relative transition-all duration-300 shadow-lg md:shadow-none md:flex-row flex-col ${isOpen ? "top-20 bg-white" : "-top-full"} md:top-0 left-0 z-0 w-full`}
          >
            <div className="justify-start items-center gap-1 flex">
              <div className="justify-center items-center gap-2 flex">
                <Link
                  href={"/company"}
                  className="text-base font-normal font-poppins"
                >
                  Company
                </Link>
              </div>
              {/* <div className="w-4 h-4 relative opacity-80">
                <Image src={"/arrow-icon.svg"} alt={"arrow-icon"} height={50} width={50} className="w-full h-full object-cover"  />
              </div> */}
            </div>
            <div className="justify-start items-center gap-1 flex">
              <div className="justify-center items-center gap-2 flex">
                <Link
                  href={"/user"}
                  className="text-base font-normal font-poppins"
                >
                  User
                </Link>
              </div>
              {/* <div className="w-4 h-4 relative opacity-80">
                <Image src={"/arrow-icon.svg"} alt={"arrow-icon"} height={50} width={50} className="w-full h-full object-cover"  />
              </div> */}
            </div>
            <div className="justify-start items-center gap-1 flex">
              <div className="justify-center items-center gap-2 flex">
                <Link
                  href={"/milestone"}
                  className="text-base font-normal font-poppins"
                >
                  Milestone
                </Link>
              </div>
              {/* <div className="w-4 h-4 relative opacity-80">
                <Image src={"/arrow-icon.svg"} alt={"arrow-icon"} height={50} width={50} className="w-full h-full object-cover"  />
              </div> */}
            </div>
            <div className="justify-start items-center gap-1 flex">
              <div className="justify-center items-center gap-2 flex">
                <Link href={"/"} className="text-base font-normal font-poppins">
                  Find work
                </Link>
              </div>
              {/* <div className="w-4 h-4 relative opacity-80">
                <Image src={"/arrow-icon.svg"} alt={"arrow-icon"} height={50} width={50} className="w-full h-full object-cover"  />
              </div> */}
            </div>
          </nav>
        </div>
        <div className="justify-start items-center gap-4 flex">
          <form className="px-3 py-2 bg-neutral-100 rounded-full border border-[#e7e7e7] justify-start items-center hidden lg:flex">
            <label className="justify-start items-center gap-2 flex">
              <div className="w-5 h-5 relative">
                <Image
                  src={"/search.svg"}
                  alt={"search_icon"}
                  height={50}
                  width={50}
                  className="w-full h-full object-cover"
                />
              </div>
              <input
                type="text"
                className="text-[#999999] text-sm font-normal font-poppins focus:outline-none bg-transparent"
                placeholder="Search"
              />
            </label>
            <div className="border-l border-[#e7e7e7] justify-start items-center gap-1 flex">
              <select
                name="type"
                id="jobType"
                className="bg-transparent px-2 focus:outline-none text-[#999999]"
              >
                <option value="fullTime">Job</option>
                <option value="partTime">Work</option>
              </select>
            </div>
          </form>
          <Link href={"/"} className="w-6 h-6 relative hidden md:inline">
            <Image
              src={"/question_mark.svg"}
              alt={"question_mark"}
              height={50}
              width={50}
              className="w-full h-full object-cover"
            />
          </Link>
          <button className="w-6 h-6 relative">
            <Image
              src={"/bell_icon.svg"}
              alt={"bell_icon"}
              height={50}
              width={50}
              className="w-full h-full object-cover hover:animate-shake"
            />
          </button>
          <Link href={"/"} className="w-6 h-6 relative">
            <Image
              src={"/profile_icon.svg"}
              alt={"profile_icon"}
              height={50}
              width={50}
              className="w-full h-full object-cover"
            />
          </Link>
          <button
            className="md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

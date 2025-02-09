"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Divider from "./Divider";
import NotificationCard from "./NotifictionCard";
import { useUser } from "@/hooks/context/userContext";
import { usePathname } from "next/navigation";

export default function Header({
  isOnDashboard = false,
}: {
  isOnDashboard?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const pathname = usePathname();

  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
  };

  const getClassNames: (path: string) => string = (path: string) => {
    return `justify-start items-center gap-1 flex ${pathname.includes(path) && "text-primary-dark underline underline-offset-8"}`;
  };

  return (
    <header className="bg-white shadow sticky z-10 top-0">
      <div className="w-full max-w-screen-xl mx-auto px-10 py-5 justify-between items-center flex">
        <div className="justify-start items-center gap-10 flex">
          {!isOnDashboard && (
            <Link
              href={"/"}
              className="text-primary-dark text-2xl font-semibold font-poppins"
            >
              LOGO
            </Link>
          )}
          <nav
            className={`justify-start items-center gap-6 flex fixed md:relative transition-all duration-300 shadow-lg md:shadow-none md:flex-row flex-col ${isOpen ? "top-20 bg-white" : "-top-full"} md:top-0 left-0 z-0 w-full`}
          >
            <div className={getClassNames("/explore")}>
              <div className="justify-center items-center gap-2 flex">
                <Link
                  href={"/explore"}
                  className="text-base font-normal font-poppins"
                >
                  Explore Projects
                </Link>
              </div>
              {/* <div className="w-4 h-4 relative opacity-80">
                <Image src={"/arrow-icon.svg"} alt={"arrow-icon"} height={50} width={50} className="w-full h-full object-cover"  />
              </div> */}
            </div>
            {!isOnDashboard && (
              <div className={getClassNames("/company")}>
                <div className="justify-center items-center gap-2 flex">
                  <Link
                    href={"/company"}
                    className="text-base font-normal font-poppins"
                  >
                    Explore Companies
                  </Link>
                </div>
                {/* <div className="w-4 h-4 relative opacity-80">
                <Image src={"/arrow-icon.svg"} alt={"arrow-icon"} height={50} width={50} className="w-full h-full object-cover"  />
              </div> */}
              </div>
            )}
            <div className={getClassNames("/support")}>
              <div className="justify-center items-center gap-2 flex">
                <Link
                  href={"/support"}
                  className="text-base font-normal font-poppins"
                >
                  Support
                </Link>
              </div>
              {/* <div className="w-4 h-4 relative opacity-80">
                <Image src={"/arrow-icon.svg"} alt={"arrow-icon"} height={50} width={50} className="w-full h-full object-cover"  />
              </div> */}
            </div>
            {!isOnDashboard && (
              <div className={getClassNames("/about")}>
                <div className="justify-center items-center gap-2 flex">
                  <Link
                    href={"/about"}
                    className="text-base font-normal font-poppins"
                  >
                    About
                  </Link>
                </div>
                {/* <div className="w-4 h-4 relative opacity-80">
                <Image src={"/arrow-icon.svg"} alt={"arrow-icon"} height={50} width={50} className="w-full h-full object-cover"  />
              </div> */}
              </div>
            )}
          </nav>
        </div>
        <div className="justify-start items-center gap-2 flex">
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
                className="text-[#999999] focus:ring-0 p-0 text-sm font-normal font-poppins focus:outline-none bg-transparent border-none"
                placeholder="Search"
              />
            </label>
            <div className="border-l border-[#e7e7e7] justify-start items-center gap-1 flex">
              <select
                name="type"
                id="jobType"
                className="bg-transparent focus:outline-none p-0 px-2 pr-8 focus:ring-0 text-[#999999] border-none"
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
          {user ? (
            <div className="contents">
              <button
                onClick={() => setIsNotificationOpen((prev) => !prev)}
                className="w-6 h-6 relative z-20"
              >
                <Image
                  src={"/bell_icon.svg"}
                  alt={"bell_icon"}
                  height={50}
                  width={50}
                  className="w-full h-full object-cover hover:animate-shake"
                />
              </button>
              <div
                onClick={() => setIsNotificationOpen((prev) => !prev)}
                className={`fixed top-0 h-screen w-screen left-0 ${isNotificationOpen ? "block" : "hidden"}`}
              ></div>
              <div className="relative">
                <div
                  className={`fixed px-2 md:absolute w-full right-0 top-20 md:top-10 z-20 sm:w-72 transition-transform duration-300 ${isNotificationOpen ? "translate-y-0" : "-translate-y-[200%]"}`}
                >
                  <div className="rounded-xl space-y-2 bg-white shadow p-4">
                    <p className="text-xl font-semibold">Notification</p>
                    <Divider />
                    <div className="text-sm space-x-2">
                      <button>All</button>
                      <button>Downloaded</button>
                      <button>Rejected</button>
                      <button>Approved</button>
                    </div>
                    <Divider />
                    <div className="space-y-3">
                      <NotificationCard />
                      <NotificationCard />
                      <NotificationCard />
                      <NotificationCard />
                      <NotificationCard />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative contents group">
                <button className="w-6 h-6 relative">
                  <Image
                    src={"/profile_icon.svg"}
                    alt={"profile_icon"}
                    height={50}
                    width={50}
                    className="w-full h-full object-cover"
                  />
                </button>
                <div
                  className={`fixed px-2 md:absolute w-full right-0 lg:right-10 top-20 md:top-20 -z-20 sm:w-52 transition-transform duration-300 group-hover:translate-y-0 -translate-y-[200%]`}
                >
                  <div className="rounded-xl space-y-2 bg-white shadow p-4 flex flex-col">
                    <div>
                      <p className="text-sm font-semibold">{user.name}</p>
                      <p className="text-xs">{user.email}</p>
                    </div>
                    <Divider />
                    <Link href={"/user"} className="text-sm">
                      Profile
                    </Link>
                    <Link href={"/dashboard"} className="text-sm">
                      Dashboard
                    </Link>
                    <Divider />
                    <button
                      onClick={handleLogout}
                      className="text-sm text-left"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : pathname !== "/login" ? (
            <Link
              href={"/login"}
              className="text-primary-dark text-base font-normal font-poppins border border-primary-dark px-2 py-1 rounded"
            >
              Login
            </Link>
          ) : (
            <Link
              href={"/signup"}
              className="text-primary-dark text-base font-normal font-poppins border border-primary-dark px-2 py-1 rounded"
            >
              Sign Up
            </Link>
          )}
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

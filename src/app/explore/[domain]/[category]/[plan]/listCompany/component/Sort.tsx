"use client";

import { changeSearchParam } from "@/lib/utils/utilsClient";
import Link from "next/link";
import { MdOutlineSort } from "react-icons/md";

export default function Sort() {
  return (
    <div className="group relative cursor-pointer hover:text-primary-dark border-2 bg-white border-primary-dark rounded-md">
      <div className="flex items-center justify-between px-2">
        <p className="menu-hover py-2 text-xs md:text-base font-medium flex items-center justify-center gap-1">
          <MdOutlineSort />
          <span>Short By:</span>
        </p>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6 group-hover:rotate-180 transition-all duration-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
      <div className="invisible absolute z-50 flex w-full text-xs md:text-base flex-col bg-white py-1 transition-all duration-100 *:px-4 *:py-2 text-primary-dark shadow-xl group-hover:visible">
        <Link
          href={changeSearchParam("sort", "relevance")}
          className="block py-1 font-semibold text-slate-500 transition-colors duration-100 hover:bg-primary-light hover:text-primary-dark md:mx-2"
        >
          Relvance
        </Link>
        <Link
          href={changeSearchParam("sort", "ratings")}
          className="block py-1 font-semibold text-slate-500 transition-colors duration-100 hover:bg-primary-light hover:text-primary-dark md:mx-2"
        >
          Ratings
        </Link>
        <Link
          href={changeSearchParam("sort", "popularity")}
          className="block py-1 font-semibold text-slate-500 transition-colors duration-100 hover:bg-primary-light hover:text-primary-dark md:mx-2"
        >
          Popularity
        </Link>
        <Link
          href={changeSearchParam("sort", "project")}
          className="block py-1 font-semibold text-slate-500 transition-colors duration-100 hover:bg-primary-light hover:text-primary-dark md:mx-2"
        >
          Project
        </Link>
      </div>
    </div>
  );
}

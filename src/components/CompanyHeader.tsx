"use client";

import Image from "next/image";
import Divider from "./Divider";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CompanyHeader() {
  const pathName = usePathname();
  return (
    <div>
      <div className="w-full h-20 md:h-52">
        <Image
          src={"/company_cover.jpg"}
          alt="Company cover"
          width={1200}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-screen-xl mx-auto border rounded-b-lg relative">
        <div className="size-20 md:size-32 ml-5 rounded-lg overflow-hidden absolute -translate-y-8 md:-translate-y-16">
          <Image
            src={"/company_logo.jpg"}
            alt="Company logo"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="pt-12 md:pt-20 px-5 flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Company Name</h2>
          <div className="flex gap-2 md:gap-4">
            <button className="group hidden xs:flex border border-primary-dark text-primary-dark text-sm md:text-base p-1 md:p-2 gap-1 md:gap-2 items-center justify-center rounded-lg md:rounded-xl font-semibold hover:bg-primary-dark hover:text-white">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Icon"
                  d="M9 1L11.472 6.26604L17 7.11567L13 11.2124L13.944 17L9 14.266L4.056 17L5 11.2124L1 7.11567L6.528 6.26604L9 1Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Add to Favorites</span>{" "}
            </button>
            <button className="group flex border-2 border-primary-dark text-white p-1 md:p-2 text-sm md:text-base gap-1 md:gap-2 items-center justify-center rounded-lg md:rounded-xl font-semibold bg-primary-dark hover:bg-white hover:text-primary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="link" clipPath="url(#clip0_39_113)">
                  <path
                    id="Icon"
                    d="M6.66411 8.66672C6.95042 9.04948 7.31569 9.36618 7.73515 9.59535C8.15461 9.82452 8.61845 9.9608 9.09522 9.99495C9.57198 10.0291 10.0505 9.9603 10.4983 9.79325C10.9462 9.62619 11.3529 9.36477 11.6908 9.02672L13.6908 7.02672C14.298 6.39805 14.634 5.55604 14.6264 4.68205C14.6188 3.80806 14.2682 2.97202 13.6502 2.354C13.0322 1.73597 12.1961 1.38541 11.3221 1.37781C10.4481 1.37022 9.60612 1.7062 8.97745 2.31339L7.83078 3.45339M9.33078 7.33339C9.04448 6.95064 8.67921 6.63394 8.25975 6.40476C7.84029 6.17559 7.37644 6.03931 6.89968 6.00517C6.42292 5.97102 5.94439 6.03981 5.49655 6.20687C5.04871 6.37393 4.64204 6.63534 4.30411 6.97339L2.30411 8.97339C1.69692 9.60207 1.36094 10.4441 1.36853 11.3181C1.37613 12.1921 1.72669 13.0281 2.34472 13.6461C2.96275 14.2641 3.79879 14.6147 4.67278 14.6223C5.54677 14.6299 6.38877 14.2939 7.01745 13.6867L8.15745 12.5467"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_39_113">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Copy Profile Link</span>
            </button>
          </div>
        </div>
        <div className="p-5 md:mt-5 flex-col justify-start items-start gap-2 inline-flex">
          <div className="text-sm sm:text-lg md:text-2xl font-medium font-poppins">
            Tag line about agency services like UX/UI Design, SEO, etc
          </div>
          <div className="text-sm sm:text-lg md:text-xl font-normal font-poppins">
            IT Services and IT Consulting, New York, USA
          </div>
        </div>
        <Divider />
        <div>
          <nav className="font-semibold md:text-xl text-sm sm:gap-4 xs:px-2 md:gap-8 flex *:p-1 *:xs:p-2 *:md:p-4 *:md:px-8">
            <Link
              href="/company"
              className={`${pathName === "/company" && "text-primary-dark underline underline-offset-8"}`}
            >
              Home
            </Link>
            <Link
              href="/company/about"
              className={`${pathName === "/company/about" && "text-primary-dark underline underline-offset-8"}`}
            >
              About
            </Link>
            <Link
              href="/company/services"
              className={`${pathName === "/company/services" && "text-primary-dark underline underline-offset-8"}`}
            >
              Services
            </Link>
            <Link
              href="/company/portfolio"
              className={`${pathName === "/company/portfolio" && "text-primary-dark underline underline-offset-8"}`}
            >
              Portfolio
            </Link>
            <Link
              href="/company/people"
              className={`${pathName === "/company/people" && "text-primary-dark underline underline-offset-8"}`}
            >
              People
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

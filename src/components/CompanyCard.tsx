import OWCBtn from "@/app/explore/[domain]/[category]/[plan]/listCompany/component/OWCBtn";
import { Company } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { CiClock2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { LuMessageCircleMore } from "react-icons/lu";

interface CompanyCardProps {
  company: Company;
}

export default async function CompanyCard({ company }: CompanyCardProps) {
  return (
    <div className="max-w-3xl p-1 h-min md:p-2 border-2 border-primary-dark hover:bg-primary-light transition-all duration-300 rounded-md md:rounded-xl lg:rounded-2xl">
      <div className="grid grid-cols-6 text-primary-dark gap-1">
        <div className="col-span-1 aspect-square max-w-16 rounded-full overflow-hidden">
          <Image
            src={company.logo}
            height={100}
            width={100}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-4 space-y-2 text-xs md:text-base">
          <h2 className="text-xl font-semibold">{company.name}</h2>
          <div className="flex items-center gap-1 text-xs">
            {company.domains.map((domain) => (
              <span
                key={domain}
                className="border-2 border-primary-dark px-2 rounded text-nowrap"
              >
                {domain}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between text-nowrap gap-1 lg:gap-4 text-xs">
            <p className=" flex items-center gap-1">
              <FiMapPin /> <span>{company.location}</span>
            </p>
            <p className=" flex items-center gap-1">
              <CiClock2 /> <span>{company.workingTime}</span>
            </p>
            <p className="text-yellow-500 flex items-center gap-1">
              <FaStar />
              <span>{company.ratings}/5</span>
            </p>
            <p className=" flex items-center gap-1">
              <span>{company.reviews} Review</span>
            </p>
          </div>
          <div>
            <p className="text-justify line-clamp-3 text-xs">
              {company.description}
            </p>
          </div>
          <div className="flex items-stretch leading-3 text-nowrap gap-1 lg:gap-2 text-[2.5vw] sm:text-[1vw] md:text-[0.8vw] xl:text-xs">
            <Link
              href={``}
              className="flex justify-center items-center border-2 border-primary-dark p-1 rounded-md group text-sm"
            >
              <LuMessageCircleMore className="group-hover:animate-bounce" />
            </Link>
            <Link
              href={`/company/${company.slug}`}
              className="flex justify-center items-center border-2 border-primary-dark px-1 font-semibold rounded-md group transition-all duration-300 text-white bg-primary-dark hover:bg-primary-light hover:text-primary-dark"
            >
              Profile
            </Link>
            <Link
              href={``}
              className="flex justify-center items-center border-2 border-primary-dark px-1 font-semibold rounded-md group transition-all duration-300 text-white bg-primary-dark hover:bg-primary-light hover:text-primary-dark"
            >
              Place Order
            </Link>
            <OWCBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

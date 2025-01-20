import { bread } from "@/lib/types";
import Link from "next/link";

interface BreadCrumProps {
  breads: bread[];
  base?: string;
}

export default async function BreadCrum({ base, breads }: BreadCrumProps) {
  return (
    <nav className="flex mt-2">
      <ol className="flex flex-wrap text-xl">
        <li className="inline-flex items-center">
          <Link
            href={`/${base}`}
            className="inline-flex items-center font-medium text-primary-dark hover:text-black transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
          </Link>
        </li>
        {breads &&
          breads.map((p, i) => (
            <li key={i}>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-primary-dark"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <Link
                  href={`/${base}/${p.slug}`}
                  className="flex font-medium text-primary-dark hover:text-black transition-all duration-300 relative hover:after:w-full after:w-0 after:h-0.5 after:absolute after:-bottom-1 after:left-0 after:bg-primary-dark after:transition-all after:duration-300  after:rounded-full after:z-10"
                >
                  {p.name}
                </Link>
              </div>
            </li>
          ))}
      </ol>
    </nav>
  );
}

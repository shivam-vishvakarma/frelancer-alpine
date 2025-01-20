import Link from "next/link";
import { FaCheck, FaIndianRupeeSign, FaO } from "react-icons/fa6";

interface TimeLineItemProps {
  title: string;
  description?: string;
  isCompleted?: boolean;
  tag?: string;
  date?: string;
  amount?: number;
}

export default function TimeLineItem({
  title,
  description,
  isCompleted = false,
  tag,
  date,
  amount,
}: TimeLineItemProps) {
  return (
    <li className="my-5 ms-7">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 mt-1 ring-8 ring-primary-dark">
        {isCompleted ? (
          <FaCheck className="text-primary-dark" />
        ) : (
          <FaO className="text-primary-dark" />
        )}
      </span>
      <h3 className="flex items-center mb-1 text-lg font-bold text-primary-dark">
        {title}
        {tag && (
          <span className="bg-primary-dark text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3 cursor-pointer">
            {tag}
          </span>
        )}
      </h3>
      <time className="block mb-2 text-sm font-semibold leading-none text-primary-dark/50">
        {date && (
          <>
            {isCompleted ? "Completed" : "Added"} on{" "}
            {new Date(date).toDateString()}
          </>
        )}
      </time>
      {description && (
        <p className="mb-4 text-base font-normal text-primary-dark">
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce &amp; Marketing
          pages.
        </p>
      )}
      <Link
        href="/"
        className="inline-flex items-center text-sm font-medium text-primary-dark mt-2"
      >
        <svg
          className="w-6 h-6 text-primary-dark me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
            clipRule="evenodd"
          />
          <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
        </svg>{" "}
        {amount}<FaIndianRupeeSign className="w-4 h-4" />
      </Link>
    </li>
  );
}

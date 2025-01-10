"use client";

import { FaFilter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Divider from "./Divider";

export default function ViewFilter() {
  return (
    <details className="group rounded-md overflow-hidden border-2 border-primary-dark shadow-md" open>
      <summary className="flex items-center gap-2 cursor-pointer bg-white p-2 text-primary-dark">
        <FaFilter className="text-primary-dark text-lg" />
        <span className="text-lg font-poppins">View Filter</span>
        <IoIosArrowDown className="text-primary-dark text-lg group-open:rotate-180 transition-all duration-100 ml-auto" />
      </summary>
      <Divider />
      <div className="p-2 bg-white flex flex-col gap-2 *:flex *:items-center *:justify-start *:gap-2">
        <label>
          <input type="radio" name="view" value="all" />
          <span>All</span>
          <span className="ml-auto">0</span>
        </label>
        <label>
          <input type="radio" name="view" value="open" />
          <span>Open</span>
          <span className="ml-auto">0</span>
        </label>
        <label>
          <input type="radio" name="view" value="answered" />
          <span>Answered</span>
          <span className="ml-auto">0</span>
        </label>
        <label>
          <input type="radio" name="view" value="closed" />
          <span>Closed</span>
          <span className="ml-auto">0</span>
        </label>
      </div>
    </details>
  );
}

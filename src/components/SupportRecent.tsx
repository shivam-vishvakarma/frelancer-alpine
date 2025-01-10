import { IoIosArrowDown } from "react-icons/io";
import { IoChatbubbleSharp } from "react-icons/io5";
import Divider from "./Divider";

export default function SupportRecent() {
  return (
    <details
      className="group rounded-md overflow-hidden border-2 border-primary-dark shadow-md"
      open
    >
      <summary className="flex items-center gap-2 cursor-pointer bg-white p-2 text-primary-dark">
        <IoChatbubbleSharp className="text-lg" />
        <span className="text-lg font-poppins">Your Recent Ticket</span>
        <IoIosArrowDown className="text-primary-dark text-lg group-open:rotate-180 transition-all duration-100 ml-auto" />
      </summary>
      <Divider />
      <div className="bg-white flex flex-col gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index}>
            <p className="p-2 py-1 flex flex-col">
              <span>
                {"#10201"+`${index}`} - {"Database Upload issiue"}
              </span>
              <span>{"Open"}</span>
            </p>
            <Divider />
          </div>
        ))}
      </div>
    </details>
  );
}

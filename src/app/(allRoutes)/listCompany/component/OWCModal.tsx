"use client";

import { useToggles } from "@/lib/hooks/context/togglesContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function OWCModal() {
  const {
    customizationModal,
    closeCustomizationModal,
    customizationModalData,
  } = useToggles();
  const router = useRouter();

  const [customizations, setCustomizations] = useState<string>();

  const handleSubmit = () => {
    router.push("/milestone");
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center backdrop-blur-sm p-4 ${customizationModal ? "block" : "hidden"}`}
    >
      <div className="bg-white group relative border-2 w-full sm:w-4/5 md:w-3/4 max-w-xl border-primary-dark rounded-lg p-4">
        <div>
          <h3 className="text-primary-dark text-2xl font-semibold">
            Order With Customization
          </h3>
          <button
            className="absolute top-2 right-2"
            onClick={closeCustomizationModal}
          >
            <IoClose className="text-primary-dark text-2xl" />
          </button>
        </div>
        <h5 className="text-lg flex items-center gap-2 mt-4">
          <span className="border-2 border-primary-dark size-4 rounded-full inline-block " />{" "}
          This includes all in premium
        </h5>
        <ul className="columns-2 md:columns-3 p-2">
          {customizationModalData?.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span className="border-2 border-primary-dark size-1 rounded-full inline-block" />{" "}
              {feature}
            </li>
          ))}
        </ul>
        <textarea
          onChange={(e) => setCustomizations(e.target.value)}
          name="customizations"
          className="w-full h-32 border-2 border-primary-dark focus:border-primary-dark focus:ring-0 focus:shadow-xl focus:-translate-y-1 transition-all duration-300 p-2 rounded-md my-5 custarea"
          placeholder="Add your customizations here"
        >
          {customizations}
        </textarea>
        <input
          type="file"
          className="file:bg-primary-dark file:text-white file:rounded-full file:transition-all file:duration-100 active:file:translate-y-1 file:px-4 file:py-2 file:border-none"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-primary-dark text-white rounded-md p-2 mt-2 active:translate-y-1 transition-all duration-300"
        >
          Order Now
        </button>
      </div>
    </div>
  );
}

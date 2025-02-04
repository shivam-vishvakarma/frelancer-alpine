"use client";

import Divider from "@/components/Divider";
import { useToggles } from "@/hooks/context/togglesContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Filters() {
  const { openFilters } = useToggles();
  const router = useRouter();
  const pathname = usePathname();
  const [filters, setFilters] = useState({
    companyType: "all",
    companySize: "all",
    companyAge: "all",
    companyLocation: "all",
  });

  const countryList = [
    "All",
    "India",
    "USA",
    "UK",
    "Australia",
    "Canada",
    "Germany",
    "France",
    "Singapore",
    "Others",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleFilter(name, value);
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleFilter = (key: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(key, value);
    router.push(`${pathname}?${searchParams.toString()}`, { scroll: false });
  };

  const handleReset = () => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete("companyType");
    searchParams.delete("companySize");
    searchParams.delete("companyAge");
    searchParams.delete("companyLocation");
    router.push(`?${searchParams.toString()}`, { scroll: false });
    setFilters({
      companyType: "all",
      companySize: "all",
      companyAge: "all",
      companyLocation: "all",
    });
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setFilters({
      companyType: searchParams.get("companyType") || "all",
      companySize: searchParams.get("companySize") || "all",
      companyAge: searchParams.get("companyAge") || "all",
      companyLocation: searchParams.get("companyLocation") || "all",
    });
  }, []);

  return (
    <div
      className={`col-span-3 fixed top-1 z-10 md:z-0 bottom-1 border-2 md:border-none border-primary-dark rounded-md overflow-auto bg-white md:static transition-all duration-300 ${openFilters ? "left-1" : "-left-full"}`}
    >
      <div className="md:border-2 border-primary-dark rounded-md p-2 xl:w-[90%] mx-auto space-y-1">
        <div className="flex justify-between items-center px-2">
          <h3 className="text-lg font-semibold font-poppins">Filter by</h3>
          <button onClick={handleReset} className="text-xs font-medium">
            Reset
          </button>
        </div>
        <Divider />
        <div className="flex flex-col gap-2 *:space-y-2 *:px-2">
          <div>
            <h4 className="text-base font-semibold font-poppins">
              Company Type
            </h4>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="companyType"
                  value="all"
                  checked={filters.companyType === "all"}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span className="text-sm">All</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="companyType"
                  value="startup"
                  checked={filters.companyType === "startup"}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span className="text-sm">Startup</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="companyType"
                  value="enterprise"
                  checked={filters.companyType === "enterprise"}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span className="text-sm">Enterprise</span>
              </label>
            </div>
          </div>
          <Divider />
          <div>
            <h4 className="text-base font-semibold font-poppins">
              Company Size
            </h4>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="companySize"
                  value="all"
                  checked={filters.companySize === "all"}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span className="text-sm">All</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="companySize"
                  value={"1-10"}
                  checked={filters.companySize === "1-10"}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span className="text-sm">1-10</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="companySize"
                  value={"11-50"}
                  checked={filters.companySize === "11-50"}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span className="text-sm">11-50</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="companySize"
                  value={"51-200"}
                  checked={filters.companySize === "51-200"}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span className="text-sm">51-200</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="companySize"
                  value={"201-500"}
                  checked={filters.companySize === "201-500"}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span className="text-sm">201-500</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="companySize"
                  value={"501-1000"}
                  checked={filters.companySize === "501-1000"}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span className="text-sm">501-1000</span>
              </label>
            </div>
          </div>
          <Divider />
          <div>
            <h4 className="text-base font-semibold font-poppins">
              Company Age
            </h4>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="companyAge"
                  value="all"
                  checked={filters.companyAge === "all"}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span className="text-sm">All</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="companyAge"
                  value="1-5"
                  checked={filters.companyAge === "1-5"}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span className="text-sm">1-5 years</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="companyAge"
                  value="6-10"
                  checked={filters.companyAge === "6-10"}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span className="text-sm">6-10 years</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="companyAge"
                  value="11-15"
                  checked={filters.companyAge === "11-15"}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span className="text-sm">11-15 years</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="companyAge"
                  value="16-20"
                  checked={filters.companyAge === "16-20"}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span className="text-sm">16-20 years</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="companyAge"
                  value="21+"
                  checked={filters.companyAge === "21+"}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span className="text-sm">21+ years</span>
              </label>
            </div>
          </div>
          <Divider />
          <div>
            <h4 className="text-base font-semibold font-poppins">
              Company Location
            </h4>
            <div className="flex flex-col gap-2">
              {countryList.map((country) => (
                <label key={country} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="companyLocation"
                    value={country.toLowerCase()}
                    checked={filters.companyLocation === country.toLowerCase()}
                    onChange={handleChange}
                    className="h-4 w-4"
                  />
                  <span className="text-sm">{country}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

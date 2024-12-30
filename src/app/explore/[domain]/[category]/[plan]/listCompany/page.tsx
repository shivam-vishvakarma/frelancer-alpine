import BreadCrum from "@/components/BreadCrum";
import CompanyCard from "@/components/CompanyCard";
import Divider from "@/components/Divider";
import ScrollHere from "@/components/ScrollHere";
import TechnologyCard from "@/components/TechnologyCard";
import {
  getCompaniesByTechStack,
  getTechnologyStack,
} from "@/lib/serverActions/dataFetchingActions";
import { bread } from "@/lib/types";
import { getTitleFromSlug } from "@/lib/utils/utils";
import Link from "next/link";
import Sort from "./component/Sort";
import Filters from "./component/Filters";
import SideInfo from "./component/SideInfo";
import ToggleBtn from "./component/ToggleBtn";

export default async function CompanyPage({
  params,
  searchParams,
}: {
  params: Promise<{ domain: string; category: string; plan: string }>;
  searchParams: Promise<{ tech: string }>;
}) {
  const domain = (await params).domain;
  const category = (await params).category;
  const plan = (await params).plan;
  const techstach = await getTechnologyStack();
  const selectedTech = (await searchParams).tech;

  const selectedDomain: bread = {
    name: `Domain: ${getTitleFromSlug(domain)}`,
    slug: "",
  };

  const selectedCategory: bread = {
    name: `Category: ${getTitleFromSlug(category)}`,
    slug: domain,
  };

  const selectedPlan: bread = {
    name: `Plan: ${getTitleFromSlug(plan)}`,
    slug: `${domain}/${category}`,
  };

  const techStack: bread = {
    name: `Tech Stack: ${getTitleFromSlug(selectedTech)}`,
    slug: `${domain}/${category}/${plan}`,
  };

  const companies = await getCompaniesByTechStack();

  return (
    <div>
      <div className="max-w-screen-xl mx-auto hidden sm:block">
        <BreadCrum
          breads={[selectedDomain, selectedCategory, selectedPlan, techStack]}
        />
      </div>
      {selectedTech && <ScrollHere target={selectedTech} />}
      <h3 className="text-center text-2xl md:text-4xl font-semibold py-2 md:py-5 text-primary-dark">
        Select Tech Stack
      </h3>
      <section className="container mx-auto py-2 md:py-5 px-2">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {techstach.map((tech) => (
            <Link href={`?tech=${tech.slug}`} key={tech.slug}>
              <TechnologyCard
                title={tech.title}
                name="tech"
                checked={tech.slug === selectedTech}
                readOnly
              />
            </Link>
          ))}
        </div>
      </section>
      <Divider />
      <section className="group-[menu] grid grid-cols-12 mt-4 max-w-screen-2xl mx-auto p-2 gap-4">
        <Filters />
        <div className="col-span-12 md:col-span-10 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4">
          <div className="col-span-1 sm:col-span-2 flex justify-between items-center">
            <p className="text-xl md:text-2xl font-semibold font-rokkitt">
              {companies.length} Companies Found
            </p>
            <div className="flex gap-2">
              <ToggleBtn />
              <Sort />
            </div>
          </div>
          {companies.map((company) => (
            <CompanyCard key={company.slug} company={company} />
          ))}
        </div>
        <div className="col-span-2 hidden lg:block">
          <SideInfo />
        </div>
      </section>
    </div>
  );
}

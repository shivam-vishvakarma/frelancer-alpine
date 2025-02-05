import BreadCrum from "@/components/BreadCrum";
import CompanyCard from "@/components/CompanyCard";
import Divider from "@/components/Divider";
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
import ToggleBtn from "./component/ToggleBtn";
import Pagination from "@/components/Pagination";
import OWCModal from "./component/OWCModal";

export default async function CompanyPage({
  searchParams,
  asComponent,
}: {
  searchParams: Promise<{
    domain: string;
    category: string;
    plan: string;
    tech: string;
  }>;
  asComponent?: boolean;
}) {
  const { domain, category, plan, tech } = await searchParams;
    const techstach = await getTechnologyStack();

  const breads = [];

  const selectedDomain: bread = {
    name: `Domain: ${getTitleFromSlug(domain)}`,
    slug: "",
  };

  if (domain) {
    breads.push(selectedDomain);
  }

  const selectedCategory: bread = {
    name: `Category: ${getTitleFromSlug(category)}`,
    slug: `?domain=${domain}`,
  };

  if (category) {
    breads.push(selectedCategory);
  }

  const selectedPlan: bread = {
    name: `Plan: ${getTitleFromSlug(plan)}`,
    slug: `?domain=${domain}&category=${category}`,
  };

  if (plan) {
    breads.push(selectedPlan);
  }

  const selectedTech: bread = {
    name: `Tech Stack: ${getTitleFromSlug(tech)}`,
    slug: `?domain=${domain}&category=${category}&plan=${plan}`,
  };

  if (tech) {
    breads.push(selectedTech);
  }

  const companies = await getCompaniesByTechStack();

  return (
    <div>
      {!asComponent && (
        <>
          <div className="max-w-screen-xl mx-auto hidden sm:block">
            <BreadCrum breads={breads} base="explore" />
          </div>
          <h3 className="text-center text-2xl md:text-4xl font-semibold py-2 md:py-5 text-primary-dark">
            Select Tech Stack
          </h3>
          <section className="container mx-auto py-2 md:py-5 px-2">
            <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
              {techstach.map((techItem) => (
                <Link
                  href={`?domain=${domain}&category=${category}&plan=${plan}&tech=${techItem.slug}`}
                  key={techItem.slug}
                >
                  <TechnologyCard
                    title={techItem.title}
                    name="tech"
                    checked={techItem.slug === tech}
                    readOnly
                  />
                </Link>
              ))}
            </div>
          </section>
        </>
      )}
      <Divider />
      <section className="group-[menu] grid grid-cols-12 mt-4 max-w-screen-xl mx-auto p-2 gap-4">
        <Filters />
        <div className="col-span-12 md:col-span-9 grid grid-cols-1 gap-2 lg:gap-4">
          <div className="flex justify-between items-center">
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
          <OWCModal />
        </div>
        {/* <div className="col-span-2 hidden lg:block">
          <SideInfo />
        </div> */}
      </section>
      <Pagination />
    </div>
  );
}

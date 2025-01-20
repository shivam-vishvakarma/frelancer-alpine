import BreadCrum from "@/components/BreadCrum";
import CategoryCard from "@/components/CategoryCard";
import PlanCard from "@/components/PlanCard";
import {
  getAvailableCategories,
  getAvailableDomains,
  getPlansByCategory,
} from "@/lib/serverActions/dataFetchingActions";
import { bread } from "@/lib/types";
import { getTitleFromSlug } from "@/lib/utils/utils";
import Link from "next/link";
import { FaGears } from "react-icons/fa6";
import OpenModal from "@/components/OpenModal";

export default async function SpecializationAddPage({
  searchParams,
}: {
  searchParams: Promise<{
    domain: string;
    category: string;
    plan: string;
  }>;
}) {
  const { domain, category, plan } = await searchParams;
  const domains = await getAvailableDomains();
  const categories = await getAvailableCategories(domain as string);
  const plans = await getPlansByCategory();

  const selectedDomain: bread = {
    name: `Domain: ${getTitleFromSlug(domain)}`,
    slug: "add",
  };
  const selectedCategory: bread = {
    name: `Category: ${getTitleFromSlug(category)}`,
    slug: `add?domain=${domain}`,
  };
  return (
    <div className="flex bg-bgMain">
      <main className="flex-1">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap">
            <div className="w-full pr-0">
              <p className="text-3xl text-primary-dark pb-5 flex items-center font-semibold">
                <FaGears className="mr-2" /> Add Specialization
              </p>
              <div className="p-6 bg-white">
                {!domain ? (
                  <section className="relative">
                    <div className="max-w-screen-xl mx-auto hidden sm:block">
                      <BreadCrum breads={[]} base="dashboard/specialization" />
                    </div>
                    <h3 className="text-center text-4xl font-semibold py-5 text-primary-dark">
                      Project Domains
                    </h3>
                    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-screen-xl mx-auto">
                      {domains.map((domain) => (
                        <Link
                          href={`/dashboard/specialization/add?domain=${domain.slug}`}
                          key={domain.id}
                        >
                          <CategoryCard title={domain.title} />
                        </Link>
                      ))}
                    </section>
                  </section>
                ) : !category ? (
                  <section className="relative">
                    <div className="max-w-screen-xl mx-auto hidden sm:block">
                      <BreadCrum
                        breads={[selectedDomain]}
                        base="dashboard/specialization"
                      />
                    </div>
                    <h3 className="text-center text-4xl font-semibold py-5 text-primary-dark">
                      Project Categories
                    </h3>
                    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-screen-xl mx-auto">
                      {categories.map((category) => (
                        <Link
                          href={`/dashboard/specialization/add?domain=${domain}&category=${category.slug}`}
                          key={category.id}
                        >
                          <CategoryCard title={category.name} />
                        </Link>
                      ))}
                    </section>
                  </section>
                ) : (
                  <section className="relative">
                    <div className="max-w-screen-xl mx-auto hidden sm:block">
                      <BreadCrum
                        breads={[selectedDomain, selectedCategory]}
                        base="dashboard/specialization"
                      />
                    </div>
                    <h3 className="text-center text-4xl font-semibold py-5 text-primary-dark">
                      Select Plan
                    </h3>
                    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 p-4">
                      {plans?.map((plan) => (
                        <Link
                          href={`/dashboard/specialization/add?domain=${domain}&category=${category}&plan=${plan.slug}`}
                          key={plan.slug}
                        >
                          <PlanCard
                            plan_name={plan.plan_name}
                            plan_items={plan.plan_items}
                            variant="company"
                          />
                        </Link>
                      ))}
                    </div>
                  </section>
                )}
                {domain && category && plan && <OpenModal varient="planForm" />}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

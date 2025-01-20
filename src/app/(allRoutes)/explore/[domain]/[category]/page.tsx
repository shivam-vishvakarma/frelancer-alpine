import BreadCrum from "@/components/BreadCrum";
import { getPlansByCategory } from "@/lib/serverActions/dataFetchingActions";
import { bread } from "@/lib/types";
import {getTitleFromSlug} from "@/lib/utils/utils";
import Link from "next/link";
import PlanCard from "@/components/PlanCard";

export default async function PlansPage({
  params,
}: {
  params: Promise<{ category: string; domain: string }>;
}) {
  const domain = (await params).domain;
  const category = (await params).category;

  const selectedDomain: bread = {
    name: `Domain: ${getTitleFromSlug(domain)}`,
    slug: "",
  };
  const selectedCategory: bread = {
    name: `Category: ${getTitleFromSlug(category)}`,
    slug: domain,
  };

  const plans = await getPlansByCategory();

  return (
    <section className="relative">
      <div className="max-w-screen-xl mx-auto hidden sm:block">
        <BreadCrum breads={[selectedDomain, selectedCategory]} base="explore" />
      </div>
      <h3 className="text-center text-4xl font-semibold py-5 text-primary-dark">
        Select Plan
      </h3>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 p-4">
        {plans?.map((plan) => (
          <Link
            href={`/explore/${domain}/${category}/${plan.slug}`}
            key={plan.slug}
          >
            <PlanCard plan_name={plan.plan_name} plan_items={plan.plan_items} />
          </Link>
        ))}
      </div>
    </section>
  );
}

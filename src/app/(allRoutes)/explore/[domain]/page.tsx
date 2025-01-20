import BreadCrum from "@/components/BreadCrum";
import CategoryCard from "@/components/CategoryCard";
import { getAvailableCategories } from "@/lib/serverActions/dataFetchingActions";
import { bread } from "@/lib/types";
import {getTitleFromSlug} from "@/lib/utils/utils";
import Link from "next/link";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ domain: string }>;
}) {
  const domain = (await params).domain;
  const categories = await getAvailableCategories(domain as string);

  const selectedDomain: bread = {
    name: `Domain: ${getTitleFromSlug(domain)}`,
    slug: "",
  };

  return (
    <section className="relative">
      <div className="max-w-screen-xl mx-auto hidden sm:block">
        <BreadCrum breads={[selectedDomain]} base="explore" />
      </div>
      <h3 className="text-center text-4xl font-semibold py-5 text-primary-dark">
        Project Categories
      </h3>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-screen-xl mx-auto">
        {categories.map((category) => (
          <Link href={`/explore/${domain}/${category.slug}`} key={category.id}>
            <CategoryCard title={category.name} />
          </Link>
        ))}
      </section>
    </section>
  );
}

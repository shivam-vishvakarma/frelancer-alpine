import BreadCrum from "@/components/BreadCrum";
import CategoryCard from "@/components/CategoryCard";
import { getAvailableDomains } from "@/lib/serverActions/dataFetchingActions";
import Link from "next/link";

export default async function ExplorePage() {
  const domains = await getAvailableDomains();
  return (
    <section className="relative">
      <div className="max-w-screen-xl mx-auto hidden sm:block">
        <BreadCrum breads={[]} />
      </div>
      <h3 className="text-center text-4xl font-semibold py-5 text-primary-dark">
        Project Domains
      </h3>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-screen-xl mx-auto">
        {domains.map((domain) => (
          <Link href={`/explore/${domain.slug}`} key={domain.id}>
            <CategoryCard title={domain.title} />
          </Link>
        ))}
      </section>
    </section>
  );
}

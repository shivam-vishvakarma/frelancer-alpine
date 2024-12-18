import CategoryCard from "@/components/CategoryCard";
import { getAvailableCategories } from "@/lib/serverActions/dataFetchingActions";
import Image from "next/image";
import Link from "next/link";

export default async function DomainPage({
  params,
}: {
  params: Promise<{ domain: string }>;
}) {
  const domainSlug = (await params).domain;
  const categories = await getAvailableCategories(domainSlug as string);

  return (
    <section className="relative">
      <Image
        src={"/domains_bg_img.png"}
        width={1920}
        height={1080}
        alt=""
        className="w-full h-full object-cover absolute inset-0 -z-10"
      />
      <h3 className="text-center text-4xl font-semibold py-5">
        Project Categories
      </h3>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-screen-xl mx-auto">
        {categories.map((category) => (
          <Link
            href={`/explore/${domainSlug}/${category.slug}`}
            key={category.id}
          >
            <CategoryCard title={category.name} />
          </Link>
        ))}
      </section>
    </section>
  );
}

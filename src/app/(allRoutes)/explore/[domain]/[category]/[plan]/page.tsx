import BreadCrum from "@/components/BreadCrum";
import Divider from "@/components/Divider";
import ScrollHere from "@/components/ScrollHere";
import TechnologyCard from "@/components/TechnologyCard";
import {
  getTechnologyStack,
  getTechnologyStackDetails,
} from "@/lib/serverActions/dataFetchingActions";
import { bread } from "@/lib/types";
import { getTitleFromSlug } from "@/lib/utils/utils";
import Image from "next/image";
import Link from "next/link";

export default async function TechnologyPage({
  params,
  searchParams,
}: {
  params: Promise<{ domain: string; category: string; plan: string }>;
  searchParams: Promise<{ tech: string }>;
}) {
  const domain = (await params).domain;
  const category = (await params).category;
  const plan = (await params).plan;

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

  const techstach = await getTechnologyStack();

  const selectedTech = (await searchParams).tech;

  return (
    <div>
      <div className="max-w-screen-xl mx-auto hidden sm:block">
        <BreadCrum
          breads={[selectedDomain, selectedCategory, selectedPlan]}
          base="explore"
        />
      </div>
      {selectedTech && <ScrollHere target={selectedTech} />}
      <h3 className="text-center text-4xl font-semibold py-5 text-primary-dark">
        Select Tech Stack
      </h3>
      <section className="container mx-auto py-5">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
      {selectedTech && (
        <>
          <TechnologySection tech={selectedTech} />
          <div className="flex flex-col items-center justify-center gap-5 my-6 md:flex-row">
            <Link
              className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-primary-dark font-semibold transition-all bg-primary-light rounded-md shadow-xl sm:w-auto hover:bg-primary-dark hover:text-white shadow-neutral-300 hover:shadow-2xl hover:shadow-neutral-400 hover:-tranneutral-y-px"
              href={`/technology/${selectedTech}`}
            >
              Read More
            </Link>
            <Link
              className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-primary-dark to-primary-light duration-300 hover:bg-gradient-to-b shadow-primary-light hover:shadow-xl hover:shadow-primary-dark hover:-tranneutral-y-px"
              href={`/explore/${domain}/${category}/${plan}/listCompany?tech=${selectedTech}`}
            >
              View Companies
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

async function TechnologySection({ tech }: { tech: string }) {
  const techData = await getTechnologyStackDetails(tech);
  if (!techData) return <div>Not Found</div>;
  return (
    <section className="w-full md:w-4/5 mx-auto">
      <h3 className="text-center text-4xl font-semibold py-5 text-primary-dark">
        {techData.title}
      </h3>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-4 gap-4">
        <div className="p-2">
          <div className="rounded-md overflow-hidden shadow-lg">
            <Image
              src={techData.image}
              alt={techData.title}
              width={300}
              height={200}
              className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
            />
          </div>
        </div>
        <div>
          <div className="text-justify p-2">
            <h3 className="text-2xl font-semibold text-primary-dark mb-4">
              Why choose {techData.title}?{" "}
              <span className="text-primary">🚀</span>
            </h3>
            <p className="text-sm md:text-xl text-primary-dark">
              {techData.description}
            </p>
          </div>
          <Divider />
          <div>
            <h3 className="text-2xl font-semibold text-primary-dark p-2">
              Technologies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
              {techData?.technologies.map((tech) => (
                <div
                  key={tech.title}
                  className="p-2 group border border-primary-dark rounded-md text-center bg-primary-light transition-all duration-300 relative overflow-hidden"
                >
                  <h3 className="text-xl font-semibold text-primary-dark flex items-center justify-center gap-2">
                    <svg
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid"
                      className="size-5 inline-block"
                    >
                      <rect fill="#092E20" width={256} height={256} rx={28} />
                      <path
                        d="M186.377 94.198v66.226c0 22.82-1.67 33.764-6.678 43.225-4.639 9.092-10.761 14.842-23.375 21.15l-26.53-12.615c12.616-5.936 18.738-11.13 22.633-19.11 4.082-8.161 5.382-17.623 5.382-42.481V94.198h28.568zm-45.449-44.12v132.239c-14.655 2.782-25.415 3.895-37.102 3.895-34.877 0-53.057-15.767-53.057-46.007 0-29.126 19.294-48.047 49.16-48.047 4.638 0 8.163.37 12.43 1.483V50.08h28.57zm-38.215 65.082c-14.47 0-22.819 8.905-22.819 24.487 0 15.214 7.978 23.561 22.634 23.561 3.152 0 5.75-.185 9.831-.74v-45.825c-3.339-1.112-6.121-1.483-9.646-1.483zm83.664-64.93v29.312h-28.568V50.231h28.568z"
                        fill="#FFFFFD"
                      />
                    </svg>
                    <span>{tech.title}</span>
                  </h3>
                  <p className="text-sm md:text-base font-medium text-primary-dark">
                    {tech.usedFor}
                  </p>
                  <div className="absolute w-full h-full left-0 top-full group-hover:top-0 transition-all duration-300 bg-white">
                    <p className="text-sm text-primary-dark line-clamp-2 p-1">
                      {tech.why}
                    </p>
                    <Link href={"/technology/"}>Learn More</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Divider />
          <div>
            <h3 className="text-2xl font-semibold text-primary-dark p-2">
              Features
            </h3>
            <ul className="text-sm md:text-xl text-primary-dark p-2 pt-0">
              {techData.features.map((feature) => (
                <li key={feature}>
                  <p>
                    <span className="text-primary-dark">✅</span> {feature}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Divider />
    </section>
  );
}

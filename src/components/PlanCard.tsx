import Divider from "./Divider";

interface PlanCardProps {
  plan_name: string;
  plan_items: string[];
}

export default async function PlansPage({
  plan_name,
  plan_items,
}: PlanCardProps) {
  return (
    <div className="bg-white group hover:-translate-y-2 transition-all duration-300 border-2 border-primary-dark rounded-lg shadow hover:shadow-lg">
      <div className="p-4 grid gap-2">
        <div className="flex justify-between items-center">
          <h3 className="text-3xl leading-6 font-semibold p-2 text-primary-dark">
            {plan_name}
          </h3>
          <span>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="text-primary-dark w-6 h-6 hidden group-hover:block"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
        <p className="text-base font-medium p-2 text-primary-dark leading-tight">
          For new makers who want to fine-tune and test an idea.
        </p>
        <button className="block w-full group-hover:bg-primary-dark group-hover:text-white transition-all rounded-md py-2 font-bold text-primary-dark border-primary-dark border-2 text-center">
          Select Plan
        </button>
      </div>
      <Divider />
      <ul className="p-2">
        <h3 className="p-2 text-sm font-bold text-primary-dark tracking-wide uppercase">
          What&apos;s included
        </h3>
        {plan_items.map((item, index) => (
          <div className="p-2 w-full" key={index}>
            <div className="bg-primary-light border-primary-light transition-all duration-300 border-2 hover:bg-white hover:border-primary-dark rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                className="text-primary-dark w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span className="font-medium text-primary-dark">{item}</span>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
type CategoryCardProps = {
  title: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function CategoryCard({ title, ...props }: CategoryCardProps) {
  return (
    <div className="border border-primary-dark flex justify-center items-center aspect-video max-w-screen-sm rounded-xl group hover:bg-primary-light transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer" {...props}>
      <h3 className="text-xl font-semibold text-center text-primary-dark group-hover-[card]:-translate-y-1 transition-transform">{title}</h3>
    </div>
  );
}

type TechnologyCardProps = {
  title: string;
} & React.HTMLProps<HTMLInputElement>;

export default async function TechnologyCard({
  title,
  ...props
}: TechnologyCardProps) {
  return (
    <label className="border has-[input:checked]:bg-primary-light border-primary-dark flex justify-center items-center aspect-[2/0.5] max-w-screen-sm rounded-xl group hover:bg-primary-light transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
      <input type="radio" {...props} hidden />
      <p className="text-xl font-semibold text-center text-primary-dark group-hover-[card]:-translate-y-1 transition-transform">
        {title}
      </p>
    </label>
  );
}

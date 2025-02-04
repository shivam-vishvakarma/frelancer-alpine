type CategoryCardProps = {
  title: string;
  selected?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default function CategoryCard({
  title,
  selected,
  ...props
}: CategoryCardProps) {
  return (
    <div
      className={`border border-primary-dark flex justify-center gap-5 items-center aspect-video max-w-screen-sm rounded-xl group hover:bg-primary-light transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${selected && "bg-primary-light shadow-lg -translate-y-1"}`}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        fill="#000"
        className="size-10"
      >
        <path fill="#333" d="M160 357.416H352V465.752H160z" />
        <path d="M160 376.152L274.24 376.152 160 434.056z" />
        <path
          d="M377.456 487.848H134.544c-9.424 0-17.12-7.712-17.12-17.12 0-9.424 7.712-17.12 17.12-17.12H377.44c9.424 0 17.12 7.712 17.12 17.12.016 9.408-7.696 17.12-17.104 17.12z"
          fill="#999"
        />
        <path
          d="M480 376.152H32c-17.6 0-32-14.4-32-32v-288c0-17.6 14.4-32 32-32h448c17.6 0 32 14.4 32 32v288c0 17.6-14.4 32-32 32z"
          fill="#d6d6d6"
        />
        <path
          fill="#333"
          d="M21.968 46.088H490.12800000000004V354.216H21.968z"
        />
        <path
          fill="#fff"
          d="M282.864 86.664H372.416V99.44800000000001H282.864z"
        />
        <path fill="#0ba4e0" d="M300.768 122.488H372.4V135.272H300.768z" />
        <path
          fill="#c8c8c8"
          d="M211.216 86.664H247.04000000000002V99.44800000000001H211.216z"
        />
        <path fill="#0ba4e0" d="M229.12 122.488H264.944V135.272H229.12z" />
        <path fill="#fff" d="M381.376 233.352H417.2V246.136H381.376z" />
        <path fill="#0ba4e0" d="M291.824 233.352H327.648V246.136H291.824z" />
        <path fill="#fff" d="M211.216 265.832H264.944V278.616H211.216z" />
        <path
          fill="#c8c8c8"
          d="M426.208 86.664H462.03200000000004V99.44800000000001H426.208z"
        />
        <path fill="#0ba4e0" d="M85.84 194.12H157.488V206.904H85.84z" />
        <path
          fill="#fff"
          d="M193.312 194.12H264.96000000000004V206.904H193.312z"
        />
        <g fill="#0ba4e0">
          <path d="M282.864 194.12H354.51199999999994V206.904H282.864z" />
          <path d="M85.84 265.832H157.488V278.616H85.84z" />
        </g>
        <g fill="#fff">
          <path d="M336.688 265.832H390.416V278.616H336.688z" />
          <path d="M390.32 194.12H461.96799999999996V206.904H390.32z" />
        </g>
        <path fill="#c8c8c8" d="M106.144 233.352H173.488V246.136H106.144z" />
        <path
          fill="#fff"
          d="M85.84 301.592H264.96000000000004V314.376H85.84z"
        />
        <g fill="#0ba4e0">
          <path d="M318.688 301.592H390.32V314.376H318.688z" />
          <path d="M85.84 158.312H193.312V171.096H85.84z" />
          <path d="M67.936 86.664H175.40800000000002V99.44800000000001H67.936z" />
        </g>
        <path fill="#c8c8c8" d="M50.016 122.488H157.488V135.272H50.016z" />
      </svg>
      <h3 className="text-xl font-semibold text-center text-primary-dark group-hover-[card]:-translate-y-1 transition-transform">
        {title}
      </h3>
    </div>
  );
}

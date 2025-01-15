interface InfoCardProps {
  title: string;
  value: string;
  color?: string;
  percentage?: number;
  animationDuration?: number;
}

export default function InfoCard({
  title,
  value,
  color = "#FDB900",
  percentage = 100,
  animationDuration = 3,
}: InfoCardProps) {
  return (
    <div className="w-full max-w-40">
      <svg id="animated" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill={color} />
        <path
          fill="none"
          strokeLinecap="round"
          strokeWidth="5"
          stroke="#fff"
          strokeDasharray={`${percentage * 2.512},251.2`}
          d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"
        >
          <animate
            attributeName="stroke-dasharray"
            from="0,251.2"
            to={`${percentage * 2.512},251.2`}
            dur={`${animationDuration}s`}
          />
        </path>
        <text
          id="count"
          className="fill-white"
          x="50"
          y="35"
          textAnchor="middle"
          dy="7"
          fontSize="10"
        >
          {title}
        </text>
        <text
          id="count"
          className="stroke-white fill-white"
          x="50"
          y="55"
          textAnchor="middle"
          dy="7"
          fontSize="20"
        >
          {value}
        </text>
      </svg>
    </div>
  );
}

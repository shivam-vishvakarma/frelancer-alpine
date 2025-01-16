import * as motion from "motion/react-client";

interface InfoCardBoxProps {
  title: string;
  value: string;
  color?: string;
  rounded?: boolean;
}

export default function InfoCardBox({
  title,
  value,
  color = "#FDB900",
  rounded = false,
}: InfoCardBoxProps) {
  return (
    <motion.div
      initial={{
        x: 100,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      whileHover={{
        y: -5,
      }}
      className="flex items-center justify-center w-full aspect-video gap-2 flex-col shadow-lg"
      style={{
        backgroundColor: color,
        borderRadius: rounded ? "1rem" : "0",
      }}
    >
      <p className="text-xl font-semibold text-white">{title}</p>
      <p className="text-3xl font-semibold text-white">{value}</p>
    </motion.div>
  );
}

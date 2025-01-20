import TimeLineItem from "./TimeLineItem";

export default function TimeLine() {
  return (
    <ol className="relative border-s-2 border-white dark:border-gray-700">
      <TimeLineItem
        title="Product Milestone"
        tag="New"
        amount={2500}
        date={new Date().toISOString()}
      />
      <TimeLineItem
        title="Product Milestone"
        tag="New"
        amount={2500}
        date={new Date().toISOString()}
      />
    </ol>
  );
}

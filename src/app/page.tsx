import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <h1>Home or landing page</h1>
      <Link className="text-blue-400 underline" href="/milestone">
        Go to milestone page
      </Link>
      <Link className="text-blue-400 underline" href="/user">
        Go to user page
      </Link>
      <Link className="text-blue-400 underline" href="/company">
        Go to company page
      </Link>
    </div>
  );
}

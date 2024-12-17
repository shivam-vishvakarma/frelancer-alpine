"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const getLinkClasses: (path: string) => string = (path: string) => {
    return `flex items-center gap-2 border p-2 md:p-4 bg-white rounded md:rounded-lg ${pathname === path ? "border-primary-dark" : ""}`;
  };

  return (
    <section className="w-full bg-bgMain">
      <div className="w-full max-w-screen-xl mx-auto pt-10 space-y-10 px-2">
        <div className="p-8 bg-primary-dark text-white rounded-xl lg:w-2/3 mx-auto space-y-4">
          <div className="flex justify-between items-center">
            <p className="md:text-xl w-3/4">
              Advertisement Banner or Subscription Banner or Inspiration
            </p>
            <button>
              <Image
                src={"/user_profile_dots.svg"}
                alt=""
                height={30}
                width={30}
              />
            </button>
          </div>
          <div className="flex justify-start items-center gap-4">
            <div className="size-10 sm:size-16 relative rounded-full overflow-hidden">
              <Image
                src={"/company_founder.jpg"}
                alt=""
                className="w-full h-full object-cover"
                height={100}
                width={100}
              />
            </div>
            <div className="space-y-2">
              <h3 className="sm:text-xl underline underline-offset-8">
                Jimmy A.
              </h3>
              <p className="text-xs">United Kingdom . Tue 11:27 AM</p>
            </div>
          </div>
        </div>
        <div className="flex lg:w-2/3 mx-auto justify-between text-nowrap *:md:mx-1">
          <Link
            href="/user/my-orders"
            className={getLinkClasses("/user/my-orders")}
          >
            <div className="size-6 md:size-8 relative rounded-sm md:rounded p-1 overflow-hidden bg-bgMain">
              <Image
                src={"/cart_icon.svg"}
                alt=""
                className="w-full h-full object-cover"
                height={200}
                width={200}
              />
            </div>
            <span className="text-xs sm:text-sm md:text-xl md:font-medium">
              My Orders
            </span>
          </Link>
          <Link
            href="/user/my-payments"
            className={getLinkClasses("/user/my-payments")}
          >
            <div className="size-6 md:size-8 relative rounded-sm md:rounded p-1 overflow-hidden bg-bgMain">
              <Image
                src={"/dollar_icon.svg"}
                alt=""
                className="w-full h-full object-cover"
                height={200}
                width={200}
              />
            </div>
            <span className="text-xs sm:text-sm md:text-xl md:font-medium">
              My Payments
            </span>
          </Link>
          <Link
            href="/user/biddings"
            className={getLinkClasses("/user/biddings")}
          >
            <div className="size-6 md:size-8 relative rounded-sm md:rounded p-1 overflow-hidden bg-bgMain">
              <Image
                src={"/layer_icon.svg"}
                alt=""
                className="w-full h-full object-cover"
                height={200}
                width={200}
              />
            </div>
            <span className="text-xs sm:text-sm md:text-xl md:font-medium">
              Bidding
            </span>
          </Link>
          <Link
            href="/user/explore-projects"
            className={getLinkClasses("/user/explore-projects")}
          >
            <div className="size-6 md:size-8 relative rounded-sm md:rounded p-1 overflow-hidden bg-bgMain">
              <Image
                src={"/serach_black_icon.svg"}
                alt=""
                className="w-full h-full object-cover"
                height={200}
                width={200}
              />
            </div>
            <span className="text-xs sm:text-sm md:text-xl md:font-medium">
              Explore Projects
            </span>
          </Link>
        </div>
        <div className="lg:w-2/3 mx-auto">{children}</div>
      </div>
      <div className="bg-white w-full">
        <div className="w-full max-w-screen-xl mx-auto p-4 flex justify-between items-center space-x-2">
          <div className="aspect-video w-24">
            <Image
              src={"/stripe_logo.svg"}
              alt=""
              className="w-full h-full object-contain"
              height={200}
              width={200}
            />
          </div>
          <div className="aspect-video w-24">
            <Image
              src={"/payoneer_logo.svg"}
              alt=""
              className="w-full h-full object-contain"
              height={200}
              width={200}
            />
          </div>
          <div className="aspect-video w-24">
            <Image
              src={"/paypal_logo.svg"}
              alt=""
              className="w-full h-full object-contain"
              height={200}
              width={200}
            />
          </div>
          <div className="aspect-video w-24">
            <Image
              src={"/applepay_logo.svg"}
              alt=""
              className="w-full h-full object-contain"
              height={200}
              width={200}
            />
          </div>
          <div className="aspect-video w-24">
            <Image
              src={"/googlepay_logo.svg"}
              alt=""
              className="w-full h-full object-contain"
              height={200}
              width={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

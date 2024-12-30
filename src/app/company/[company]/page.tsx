import Divider from "@/components/Divider";
import Image from "next/image";
import Link from "next/link";

export default function CompanyHome() {
  return (
    <section className="grid grid-cols-12 mx-auto max-w-screen-xl my-4 px-2 xl:px-0 gap-4">
      {/* left section */}
      <div className="col-span-12 md:col-span-8 space-y-4">
        {/* overview section */}
        <div className="border rounded-lg">
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Overview</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Consequat id amet volutpat
              faucibus congue sed penatibus quis. At dolor adipiscing fermentum
              ultrices. Eu hac luctus sit arcu rhoncus facilisis laoreet
              pharetra sit. Duis scelerisque massa id aenean massa elit
              porttitor. Viverra egestas dui sapien neque. Et tortor id lectus
              quam fermentum nibh volutpat
            </p>
          </div>
          <Divider />
          <div className="flex justify-center items-center gap-2 font-semibold p-2 text-secondary">
            <button className="peer">Show all details </button>
            <Image
              src={"/arrow-right.svg"}
              alt=""
              className="peer-active:translate-x-4 transition-transform duration-300"
              width={15}
              height={15}
            />{" "}
          </div>
        </div>
        {/* Featured Services */}
        <div className="border rounded-lg p-4 space-y-4">
          <h4 className="text-xl font-semibold">Featured Services</h4>
          <details className="group">
            <summary className="flex justify-between text-lg font-medium cursor-pointer">
              <p>Web Development</p>
              <Image
                src={"/arrow-icon.svg"}
                className="group-open:rotate-180 transition-transform duration-300"
                alt=""
                width={20}
                height={20}
              />
            </summary>
            <p className="pt-4">
              Full-cycle web development from the UX research to the live web
              application by using latest technology.
            </p>
          </details>
          <Divider />
          <details className="group">
            <summary className="flex justify-between text-lg font-medium cursor-pointer">
              <p>UX/UI Design</p>
              <Image
                src={"/arrow-icon.svg"}
                className="group-open:rotate-180 transition-transform duration-300"
                alt=""
                width={20}
                height={20}
              />
            </summary>
            <p className="pt-4">
              Full-cycle web development from the UX research to the live web
              application by using latest technology.
            </p>
          </details>
          <Divider />
          <details className="group">
            <summary className="flex justify-between text-lg font-medium cursor-pointer">
              <p>App Development</p>
              <Image
                src={"/arrow-icon.svg"}
                className="group-open:rotate-180 transition-transform duration-300"
                alt=""
                width={20}
                height={20}
              />
            </summary>
            <p className="pt-4">
              Full-cycle web development from the UX research to the live web
              application by using latest technology.
            </p>
          </details>
        </div>
        {/* Work History */}
        <div className="border rounded-lg">
          <h4 className="text-xl font-semibold px-4 py-2 md:p-4">
            Work History
          </h4>
          <div className="px-4 py-2 md:p-4 flex flex-col gap-2">
            <div className="flex justify-between items-center flex-wrap gap-2">
              <div className="flex items-center font-semibold text-lg gap-2">
                <p>{"⭐".repeat(5)}</p>
                <p>5.0/5</p>
              </div>
              <div className="flex items-center gap-2 md:gap-8 font-semibold md:text-lg">
                <p>$24,375.00</p>
                <p>$85.00/h</p>
                <p>813 hours</p>
              </div>
            </div>
            <div>
              <p className="text-secondary">Jul 1, 2024 - Sep 30, 2024</p>
            </div>
            <div>
              <Link
                href={"/"}
                className="underline underline-offset-8 font-semibold"
              >
                Design and development of the SaaS app
              </Link>
            </div>
            <div>
              <p className="text-secondary">
                Yuri, Angle2, and its team have been invaluable in completing
                this critical work. From exploration and research to development
                and release. Not only was their execution incredible, but their
                recommendations and guidance along the way resulted in
                tremendous value for our end users. Highly recommended
                expertise.
              </p>
            </div>
          </div>
          <Divider />
          <div className="p-4 flex flex-col gap-2">
            <div className="flex justify-between items-center flex-wrap gap-2">
              <div className="flex items-center font-semibold text-lg gap-2">
                <p>{"⭐".repeat(5)}</p>
                <p>5.0/5</p>
              </div>
              <div className="flex items-center gap-2 md:gap-8 font-semibold md:text-lg">
                <p>$24,375.00</p>
                <p>Fixed Price</p>
              </div>
            </div>
            <div>
              <p className="text-secondary">Jul 1, 2024 - Sep 30, 2024</p>
            </div>
            <div>
              <Link
                href={"/"}
                className="underline underline-offset-8 font-semibold"
              >
                Design and development of the SaaS app
              </Link>
            </div>
            <div>
              <p className="text-secondary">
                Yuri, Angle2, and its team have been invaluable in completing
                this critical work. From exploration and research to development
                and release. Not only was their execution incredible, but their
                recommendations and guidance along the way resulted in
                tremendous value for our end users. Highly recommended
                expertise.
              </p>
            </div>
          </div>
          <Divider />
          <div className="px-4 py-2 md:p-4 flex flex-col gap-2">
            <div className="flex justify-between items-center flex-wrap gap-2">
              <div className="flex items-center font-semibold text-lg gap-2">
                <p>{"⭐".repeat(5)}</p>
                <p>5.0/5</p>
              </div>
              <div className="flex items-center gap-2 md:gap-8 font-semibold md:text-lg">
                <p>$24,375.00</p>
                <p>$85.00/h</p>
                <p>813 hours</p>
              </div>
            </div>
            <div>
              <p className="text-secondary">Jul 1, 2024 - Sep 30, 2024</p>
            </div>
            <div>
              <Link
                href={"/"}
                className="underline underline-offset-8 font-semibold"
              >
                Design and development of the SaaS app
              </Link>
            </div>
            <div>
              <p className="text-secondary">
                Yuri, Angle2, and its team have been invaluable in completing
                this critical work. From exploration and research to development
                and release. Not only was their execution incredible, but their
                recommendations and guidance along the way resulted in
                tremendous value for our end users. Highly recommended
                expertise.
              </p>
            </div>
          </div>
          <Divider />
          <div className="flex justify-center items-center gap-2 font-semibold p-2 text-secondary">
            <button className="peer">Show all details </button>
            <Image
              src={"/arrow-right.svg"}
              alt=""
              className="peer-active:translate-x-4 transition-transform duration-300"
              width={15}
              height={15}
            />{" "}
          </div>
        </div>
        {/* Profile */}
        <div className="border rounded-lg p-4 space-y-4">
          <div>
            <h4 className="text-xl font-semibold">Founder</h4>
          </div>
          <div className="flex gap-2 sm:gap-8 flex-col sm:flex-row">
            <div className="size-10 sm:size-20 overflow-hidden rounded-full">
              <Image
                src={"/company_founder.jpg"}
                alt="profile pic"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="sm:text-xl underline underline-offset-8">Jimmy A.</h2>
              <div className="flex gap-4 flex-col sm:flex-row">
                <div className="flex items-center sm:justify-center gap-2">
                  <div className="size-6 bg-bgMain p-1 rounded-full">
                    <Image
                      src={"/badge_icon.svg"}
                      alt="Badge icon"
                      width={50}
                      className="w-full h-full object-contain"
                      height={50}
                    />
                  </div>
                  <p className="text-nowrap text-sm">100% Job Success</p>
                </div>
                <div className="flex items-center sm:justify-center gap-2">
                  <div className="size-6 bg-bgMain p-1 rounded-full">
                    <Image
                      src={"/star_icon.svg"}
                      alt="Badge icon"
                      width={50}
                      className="w-full h-full object-contain"
                      height={50}
                    />
                  </div>
                  <p className="text-nowrap text-sm">Top Rated</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="font-medium">
              Lorem ipsum dolor sit amet consectetur. Consequat id amet volutpat
              faucibus congue sed penatibus quis. At dolor adipiscing fermentum
              ultrices. Eu hac luctus sit arcu rhoncus facilisis laoreet
              pharetra sit.
            </p>
          </div>
        </div>
      </div>
      {/* right section */}
      <div className="col-span-12 md:col-span-4">
        <div className="border rounded-xl">
          <div className="flex p-2 px-8 gap-4 lg:gap-8 flex-wrap">
            <div className="flex items-center justify-center gap-2">
              <div className="size-8 bg-bgMain p-2 rounded-full">
                <Image
                  src={"/badge_icon.svg"}
                  alt="Badge icon"
                  width={50}
                  className="w-full h-full object-contain"
                  height={50}
                />
              </div>
              <p className="text-nowrap">100% Job Success</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="size-8 bg-bgMain p-2 rounded-full">
                <Image
                  src={"/star_icon.svg"}
                  alt="Badge icon"
                  width={50}
                  className="w-full h-full object-contain"
                  height={50}
                />
              </div>
              <p className="text-nowrap">Top Rated</p>
            </div>
          </div>
          <Divider />
          <div className="p-8 flex flex-col gap-4 font-semibold">
            <h4 className="text-xl">Company Activity</h4>
            <div>
              <p className="text-secondary">Hourly rate</p>
              <p>$45.00-$60.00</p>
            </div>
            <div>
              <p className="text-secondary">Minimum project size</p>
              <p>$5K+</p>
            </div>
            <div>
              <p className="text-secondary">Total Earned</p>
              <p>$800K+</p>
            </div>
            <div>
              <p className="text-secondary">Total hours</p>
              <p>7,257</p>
            </div>
            <div>
              <p className="text-secondary">Total jobs</p>
              <p>250</p>
            </div>
            <div>
              <p className="text-secondary">Member</p>
              <p>Sep 24, 2016</p>
            </div>
          </div>
          <Divider />
          <div className="p-8 flex flex-col gap-4 font-semibold">
            <h4 className="text-xl">Company Location</h4>
            <div className="flex gap-4 items-center justify-start">
              <Image
                src={"/location_icon.svg"}
                alt="Location icon"
                width={20}
                height={20}
              />
              <div>
                <p className="font-semibold">New York, USA</p>
                <p className="text-secondary">2.29 pm GMT+2 Primary Location</p>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-start">
              <Image
                src={"/location_icon.svg"}
                alt="Location icon"
                width={20}
                height={20}
              />
              <div>
                <p className="font-semibold">New York, USA</p>
                <p className="text-secondary">2.29 pm GMT+2 Primary Location</p>
              </div>
            </div>
          </div>
          <Divider />
          <div className="p-8 flex flex-col gap-4 font-semibold">
            <h4 className="text-xl">Languages</h4>
            <p className="flex gap-2">
              <span className="font-semibold">English:</span>
              <span className="text-secondary">Fluent</span>
            </p>
            <p className="flex gap-2">
              <span className="font-semibold">Ukrainian:</span>
              <span className="text-secondary">Native or Bilingual</span>
            </p>
          </div>
          <Divider />
          <div className="p-8 flex flex-col gap-4 font-semibold">
            <h4 className="text-xl">Awards</h4>
            <p className="flex gap-2">
              <span className="font-semibold">Awwwards:</span>
              <span className="text-secondary">Designer award</span>
            </p>
            <p className="flex gap-2">
              <span className="font-semibold">Awwwards:</span>
              <span className="text-secondary">Site Of The Day</span>
            </p>
            <p className="flex gap-2">
              <span className="font-semibold">csswinner Site of the day:</span>
              <span className="text-secondary">Figma.com</span>
            </p>
          </div>
          <Divider />
          <div className="flex justify-center text-secondary items-center gap-2 font-semibold p-2">
            <button className="peer">See all awards</button>
            <Image
              src={"/arrow-right.svg"}
              alt=""
              className="peer-active:translate-x-4 transition-transform duration-300"
              width={15}
              height={15}
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

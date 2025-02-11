import GalleryCard from "@/components/GalleryCard";
import {
  getCategories,
  getLandingPageStats,
} from "@/lib/serverActions/dataFetchingActions";
import { Category, Stats } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const categories: Category[] = await getCategories();
  const stats: Stats[] = await getLandingPageStats();
  return (
    <main className="py-4">
      <div className="bg-primary-light hidden md:block">
        <menu className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
          <Link
            href={"/category/all"}
            className="bg-primary-dark py-1 px-4 rounded-full text-white"
          >
            All Categories
          </Link>
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="bg-white text-primary-dark hover:[transform:rotateX(360deg)] hover:bg-primary-dark hover:text-white transition-all duration-700 py-1 px-4 rounded-full"
            >
              {category.name}
            </Link>
          ))}
          <Link
            href={"/category"}
            className="py-1 px-4 rounded-full flex gap-1 bg-white text-primary-dark hover:[transform:rotateX(360deg)] hover:bg-primary-dark hover:text-white transition-all duration-700"
          >
            <Image
              src={"/filter_icon.svg"}
              width={20}
              height={20}
              style={{
                width: "auto",
              }}
              alt=""
            />
            All Filteres
          </Link>
        </menu>
      </div>
      <section className="max-w-screen-xl mx-auto md:pt-4 p-2">
        <div className="grid md:grid-cols-2">
          <div className="w-4/5 space-y-3 md:space-y-6 p-4 md:my-4">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-rokkitt">
              How work should work
            </h2>
            <p className="text-secondary text-sm md:text-xl font-rokkitt">
              Work with the largest network of independent professionals and get
              things
            </p>
            <Link
              href={"/signup"}
              className="bg-primary-dark text-white py-3 px-8 rounded-full inline-block"
            >
              Get Started
            </Link>
            <div className="flex gap-8 font-rokkitt">
              {stats.map((stat, i) => (
                <p className="flex flex-col font-semibold" key={i}>
                  <span className="text-3xl">{stat.value}</span>
                  <span className="text-sm text-secondary">{stat.title}</span>
                </p>
              ))}
            </div>
          </div>
          <div className="self-center size-[90%] relative">
            <span className="absolute size-[90%] bg-primary-dark -z-10 rounded-xl top-1/2 -translate-y-1/2 -right-[5%]"></span>
            <span className="absolute size-[80%] bg-primary-light -z-20 rounded-xl top-1/2 -translate-y-1/2 -right-[10%]"></span>
            <Image
              src={"/hero_img.jpeg"}
              className="w-full h-full object-cover rounded-xl"
              width={500}
              height={500}
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 my-10 md:mt-[10%] relative">
          <div className="col-span-6 md:col-span-4 bg-primary-light p-8 rounded-xl">
            <h2 className="text-2xl md:text-4xl font-semibold">
              Why Choose Us
            </h2>
            <ul className="md:w-1/2 space-y-2 my-4">
              <li>
                <h2 className="text-xl md:text-3xl font-semibold">
                  Proof of quality
                </h2>
                <p className="text-xs md:text-sm">
                  Check any pro&apos;s work samples, client reviews, and
                  identity verification
                </p>
              </li>
              <li>
                <h2 className="text-xl md:text-3xl font-semibold">
                  No cost until you hire
                </h2>
                <p className="text-xs md:text-sm">
                  Interview potential fits for your job, negotiate rates, and
                  only pay for work you approve.
                </p>
              </li>
              <li>
                <h2 className="text-xl md:text-3xl font-semibold">
                  Safe and secure
                </h2>
                <p className="text-xs md:text-sm">
                  Focus on your work knowing we help protect your data and
                  privacy. We&apos;re here with 24/7 support if you need it.
                </p>
              </li>
            </ul>
          </div>
          <div className="bg-[#1E244F] col-span-6 sm:col-span-4 md:col-span-2 w-full h-full rounded-xl flex md:px-16 p-8 justify-end items-start text-white text-xl md:text-2xl font-semibold flex-col gap-4">
            <h3>
              We&apos;re <br /> the world&apos;s work <br /> marketplace
            </h3>
            <p className="flex items-center gap-4">
              <span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 sm:size-10"
                >
                  <path
                    id="Icon"
                    d="M9 1L11.472 6.26604L17 7.11567L13 11.2124L13.944 17L9 14.266L4.056 17L5 11.2124L1 7.11567L6.528 6.26604L9 1Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>4.9/5</span>
            </p>
            <div className="flex gap-4">
              <svg
                width="31"
                height="32"
                viewBox="0 0 31 32"
                fill="none"
                className="size-6 sm:size-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.2627 22.0254C19.8561 23.255 18.015 24 16 24C11.5817 24 8 20.4183 8 16C8 11.5817 11.5817 8 16 8C16.3735 8 16.741 8.02559 17.1009 8.07512L19.5681 0.39932C18.4207 0.138 17.2265 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C19.2937 32 22.3549 31.0048 24.8993 29.2987L21.2627 22.0254ZM19 14L15 20.5H23L26.5 27.5L30.5 20.5L26.5 14H19ZM23.6578 4.24393C22.8025 4.24393 22.2367 4.7022 22.2367 5.91154H20.1315C20.1315 3.8493 21.2631 2.49994 23.7236 2.49994C25.6841 2.49994 26.9999 3.49287 26.9999 5.17321C26.9999 6.89233 25.522 7.95262 24.281 8.84293C23.8496 9.15248 23.4468 9.44149 23.1446 9.73049V9.75595H26.9999V11.4999H19.9999C19.9999 10.036 20.7894 9.13219 21.592 8.48297C22.0198 8.13917 22.4413 7.83825 22.8303 7.56049C23.9251 6.77892 24.7631 6.18064 24.7631 5.32597C24.7631 4.65128 24.3683 4.24393 23.6578 4.24393Z"
                  fill="white"
                />
              </svg>
              <p className="flex flex-col">
                <span className="text-sm sm:text-xl">Award winner</span>
                <span className="text-xs sm:text-sm font-normal">
                  G2&apos;s 2021 Best Sofrware Awards
                </span>
              </p>
            </div>
          </div>
          <Image
            src={"/person_img.png"}
            width={500}
            height={500}
            alt=""
            className="absolute w-3/6 md:w-2/6 right-0 md:left-1/2 bottom-10 md:bottom-0"
          />
        </div>
        <div className="bg-secondary/10 p-4 rounded-xl backdrop-blur-lg">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Popular services
          </h2>
          <div className="grid md:grid-cols-3 gap-4 p-2 py-6 place-items-center">
            <div className="md:w-3/5">
              <div className="md:aspect-square">
                <Image
                  src={"/services_1_img.jpeg"}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-xl"
                  alt=""
                />
              </div>
              <p className="text-xl font-semibold">Application Development</p>
            </div>
            <div className="md:w-3/5">
              <div className="md:aspect-square">
                <Image
                  src={"/services_2_img.jpeg"}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-xl"
                  alt=""
                />
              </div>
              <p className="text-xl font-semibold">Application Development</p>
            </div>
            <div className="md:w-3/5">
              <div className="md:aspect-square">
                <Image
                  src={"/services_3_img.jpeg"}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-xl"
                  alt=""
                />
              </div>
              <p className="text-xl font-semibold">Application Development</p>
            </div>
          </div>
        </div>
        <div className="my-10 bg-gradient-to-r from-green-400 via-primary-dark to-black p-4 md:py-28 rounded-xl text-white text-center flex flex-col items-center justify-center gap-8">
          <h3 className="text-3xl md:text-5xl font-semibold font-rokkitt">
            Freelance services at your fingertips!
          </h3>
          <Link
            href={"/signup"}
            className="inline-block py-3 px-8 rounded-full bg-white text-black font-semibold text-xl"
          >
            Join
          </Link>
        </div>
        <div className="aspect-video relative my-10 filter brightness-90">
          <Image
            src={"/landingpage_vid.jpeg"}
            alt=""
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-xl"
          />
          <Image
            src={"/play_icon.svg"}
            alt=""
            width={100}
            height={100}
            style={{
              width: "auto",
            }}
            className="absolute top-1/2 !w-24 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="aspect-square sm:aspect-[1.5] md:aspect-[16/6] relative my-4 md:my-10 overflow-hidden rounded-xl">
          <Image
            src={"/client_carowsal.jpeg"}
            alt=""
            width={1900}
            height={1200}
            className="w-full h-full object-cover brightness-75 saturate-200"
          />
          <div className="absolute w-full h-full bg-blue-500/40 top-0 left-0 flex flex-col gap-2 md:gap-4 lg:gap-6 xl:gap-8 justify-end text-white p-2 md:p-4 font-rokkitt">
            <h3 className="text-3xl lg:text-5xl md:w-1/3">
              Find talent your way
            </h3>
            <p className="text-sm md:text-xl md:w-2/3 xl:w-1/3">
              Work with the largest network of independent professionals and get
              things done-from quick turnarounds to big transformations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
              <div className="bg-primary-dark p-2 md:p-4 hover:bg-white hover:text-primary-dark transition-all duration-300 flex flex-col gap-2 md:gap-4 rounded-md md:rounded-xl">
                <h4 className="text-xl md:text-2xl lg:text-3xl">
                  Post a job and hire a professional
                </h4>
                <p className="flex items-center text-sm lg:text-lg gap-1 hover:gap-3 transition-all duration-300">
                  <Link href={"/signup"}>Get Started</Link>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.1665 10H15.8332"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 4.16663L15.8333 9.99996L10 15.8333"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </p>
              </div>
              <div className="bg-primary-dark p-2 md:p-4 hover:bg-white hover:text-primary-dark transition-all duration-300 flex flex-col gap-2 md:gap-4 rounded-md md:rounded-xl">
                <h4 className="text-xl md:text-2xl lg:text-3xl">
                  Browse and buy some projects
                </h4>
                <p className="flex items-center text-sm lg:text-lg gap-1 hover:gap-3 transition-all duration-300">
                  <Link href={"/signup"}>Project Catalog</Link>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.1665 10H15.8332"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 4.16663L15.8333 9.99996L10 15.8333"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </p>
              </div>
              <div className="bg-primary-dark p-2 md:p-4 hover:bg-white hover:text-primary-dark transition-all duration-300 flex flex-col gap-2 md:gap-4 rounded-md md:rounded-xl">
                <h4 className="text-xl md:text-2xl lg:text-3xl">
                  Let us help you find the right talent
                </h4>
                <p className="flex items-center text-sm lg:text-lg gap-1 hover:gap-3 transition-all duration-300">
                  <Link href={"/signup"}>Explore Companies</Link>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.1665 10H15.8332"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 4.16663L15.8333 9.99996L10 15.8333"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl md:text-5xl font-semibold my-4 md:my-8">
            Made on Lorem Ipsum
          </h3>
          <GalleryCard mainImg="/services_2_img.jpeg" />
        </div>
        <div className="bg-primary-dark aspect-[16/4] relative my-4 md:my-10 rounded-xl grid md:grid-cols-2 font-rokkitt">
          <div className="relative order-2 md:order-1 p-2">
            <div className="absolute right-10 md:top-10 md:left-1/2 md:-translate-x-1/2 z-10">
              <button className="hover:bg-white hover:text-primary-dark transition-all duration-100 text-white p-4">
                <svg
                  width="29"
                  height="18"
                  viewBox="0 0 29 18"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.28468 10.2749L10.6102 15.0835L10.6102 15.0835C10.8709 15.319 11.0262 15.6475 11.0262 15.9999C11.0262 16.3522 10.8709 16.6808 10.6102 16.9162C10.3509 17.1504 10.0072 17.276 9.65625 17.276C9.30531 17.276 8.96157 17.1504 8.70226 16.9162L0.952633 9.91655C0.823551 9.80025 0.718693 9.65986 0.646267 9.50222C0.573774 9.34442 0.535769 9.17358 0.535769 8.99987C0.535769 8.82617 0.573774 8.65532 0.646267 8.49753C0.718693 8.33988 0.823549 8.19949 0.952633 8.08319L8.70226 1.08353C8.96157 0.849314 9.30531 0.723768 9.65625 0.723768C10.0072 0.723768 10.3509 0.849314 10.6102 1.08353C10.8709 1.31897 11.0262 1.64753 11.0262 1.99987C11.0262 2.35221 10.8709 2.68078 10.6102 2.91621L10.6102 2.91626L5.28468 7.72487L27.0938 7.72487C27.4444 7.72487 27.7878 7.8503 28.0469 8.08431C28.3073 8.31954 28.4625 8.64782 28.4625 8.99987C28.4625 9.35192 28.3073 9.6802 28.0469 9.91543C27.7878 10.1494 27.4444 10.2749 27.0938 10.2749H5.28468Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0.8"
                  />
                </svg>
              </button>
              <button className="hover:bg-white hover:text-primary-dark transition-all duration-100 text-white p-4">
                <svg
                  width="29"
                  height="17"
                  viewBox="0 0 29 17"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3952 2.64896L18.3952 2.64892C18.1336 2.4211 17.9738 2.09929 17.9738 1.74991C17.9738 1.40053 18.1336 1.07872 18.3952 0.850904C18.655 0.624613 18.9969 0.505097 19.3438 0.505097C19.6906 0.505097 20.0325 0.624613 20.2923 0.850904L28.042 7.60058L18.3952 2.64896ZM18.3952 2.64896L23.6866 7.25616L1.90625 7.25616C1.55971 7.25616 1.21812 7.37557 0.958528 7.60166C0.697188 7.82928 0.5375 8.15081 0.5375 8.49991C0.5375 8.84901 0.697189 9.17055 0.958528 9.39816C1.21811 9.62426 1.55971 9.74366 1.90625 9.74366H23.6866L18.3952 14.3509L18.3952 14.3509M18.3952 2.64896L18.3952 14.3509M18.3952 14.3509C18.1336 14.5787 17.9738 14.9005 17.9738 15.2499C17.9738 15.5993 18.1336 15.9211 18.3952 16.1489C18.655 16.3752 18.9969 16.4947 19.3438 16.4947C19.6906 16.4947 20.0325 16.3752 20.2923 16.1489L28.042 9.39925L18.3952 14.3509ZM28.3514 8.00449C28.2777 7.84991 28.1717 7.71335 28.0423 7.6009V9.39892C28.1717 9.28648 28.2777 9.14991 28.3514 8.99534C28.4252 8.84037 28.4642 8.67183 28.4642 8.49991C28.4642 8.328 28.4252 8.15945 28.3514 8.00449Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0.8"
                  />
                </svg>
              </button>
            </div>
            <div className="md:absolute left-5 lg:left-16 -bottom-10 w-2/5 aspect-[0.8] z-0">
              <Image
                src={"/person_img_2.jpeg"}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            </div>
            <div className="w-2/3 absolute bottom-2 right-2 md:right-0 md:bottom-0 md:translate-y-1/2">
              <div className="flex flex-col justify-center items-center gap-2 lg:gap-4 p-4 pt-7 rounded-xl bg-primary-light text-primary-dark relative">
                <div className="bg-white size-14 flex justify-center items-center rounded-full absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 shadow-lg">
                  <svg
                    width="19"
                    height="13"
                    viewBox="0 0 19 13"
                    className="text-primary-dark"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.22927 1.98125C3.45689 0.777123 5.31452 0.166748 7.74964 0.166748H8.62464V2.39846L7.92114 2.52591C6.72239 2.74283 5.88852 3.16954 5.44227 3.79575C5.20942 4.1331 5.07737 4.51937 5.05902 4.91675H7.74964C7.98171 4.91675 8.20427 5.00015 8.36836 5.14862C8.53245 5.29709 8.62464 5.49845 8.62464 5.70841V11.2501C8.62464 12.1233 7.83977 12.8334 6.87464 12.8334H1.62464C1.39258 12.8334 1.17002 12.75 1.00592 12.6015C0.84183 12.4531 0.749642 12.2517 0.749642 12.0417V8.08341L0.752267 5.77254C0.744392 5.68466 0.578142 3.60258 2.22927 1.98125ZM16.4996 12.8334H11.2496C11.0176 12.8334 10.795 12.75 10.6309 12.6015C10.4668 12.4531 10.3746 12.2517 10.3746 12.0417V8.08341L10.3773 5.77254C10.3694 5.68466 10.2031 3.60258 11.8543 1.98125C13.0819 0.777123 14.9395 0.166748 17.3746 0.166748H18.2496V2.39846L17.5461 2.52591C16.3474 2.74283 15.5135 3.16954 15.0673 3.79575C14.8344 4.1331 14.7024 4.51937 14.684 4.91675H17.3746C17.6067 4.91675 17.8293 5.00015 17.9934 5.14862C18.1575 5.29709 18.2496 5.49845 18.2496 5.70841V11.2501C18.2496 12.1233 17.4648 12.8334 16.4996 12.8334Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h5 className="text-xl ld:text-2xl font-semibold">
                  Jacob Molen
                </h5>
                <p className="text-center text-xs md:text-sm lg:w-4/5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex p-4 md:order-2 md:p-0 justify-center gap-3 lg:gap-6 items-start text-white flex-col">
            <h3 className="text-2xl xl:text-4xl xl:w-3/5">
              What we have done & <br className="hidden md:block" /> what our
              Customers say
            </h3>
            <p className="text-sm md:text-lg lg:w-3/5 text-secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5 md:mt-20">
          <Image
            src={"/logo_1.png"}
            width={500}
            height={500}
            alt=""
            className="saturate-0 w-full h-full object-contain scale-75"
          />
          <Image
            src={"/logo_2.png"}
            width={500}
            height={500}
            alt=""
            className="saturate-0 w-full h-full object-contain scale-75"
          />
          <Image
            src={"/logo_3.png"}
            width={500}
            height={500}
            alt=""
            className="saturate-0 w-full h-full object-contain scale-75"
          />
          <Image
            src={"/logo_4.png"}
            width={500}
            height={500}
            alt=""
            className="saturate-0 w-full h-full object-contain scale-75"
          />
          <Image
            src={"/logo_5.png"}
            width={500}
            height={500}
            alt=""
            className="saturate-0 w-full h-full object-contain scale-75"
          />
          <Image
            src={"/logo_1.png"}
            width={500}
            height={500}
            alt=""
            className="saturate-0 w-full h-full object-contain scale-75"
          />
          <Image
            src={"/logo_2.png"}
            width={500}
            height={500}
            alt=""
            className="saturate-0 w-full h-full object-contain scale-75"
          />
          <Image
            src={"/logo_3.png"}
            width={500}
            height={500}
            alt=""
            className="saturate-0 w-full h-full object-contain scale-75"
          />
          <Image
            src={"/logo_4.png"}
            width={500}
            height={500}
            alt=""
            className="saturate-0 w-full h-full object-contain scale-75"
          />
          <Image
            src={"/logo_5.png"}
            width={500}
            height={500}
            alt=""
            className="saturate-0 w-full h-full object-contain scale-75"
          />
        </div>
      </section>
    </main>
  );
}

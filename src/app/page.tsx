"use client";

import {
  getCategories,
  getLandingPageStats,
} from "@/lib/serverActions/dataFetchingActions";
import { Category, Stats } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([] as Category[]);
  const [stats, setStats] = useState<Stats[]>([] as Stats[]);
  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
    getLandingPageStats().then((data) => {
      setStats(data);
    });
  }, []);
  return (
    <main className="py-4">
      <div className="bg-primary-light">
        <menu className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
          <Link
            href={"/categories/all"}
            className="bg-primary-dark py-1 px-4 rounded-full text-white"
          >
            All Categories
          </Link>
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="bg-bgMain py-1 px-4 rounded-full"
            >
              {category.name}
            </Link>
          ))}
          <Link
            href={"/categories"}
            className="bg-bgMain py-1 px-4 rounded-full flex gap-1"
          >
            <Image src={"/filter_icon.svg"} width={20} height={20} alt="" />
            All Filteres
          </Link>
        </menu>
      </div>
      <section className="max-w-screen-xl mx-auto pt-4">
        <div className="grid grid-cols-2">
          <div className="w-4/5 space-y-6 p-4 my-4">
            <h2 className="text-7xl font-bold font-rokkitt">
              How work should work
            </h2>
            <p className="text-secondary text-xl font-rokkitt">
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
        <div className="grid grid-cols-6 gap-4 my-10 mt-[10%] relative">
          <div className="col-span-4 bg-primary-light p-8 rounded-xl">
            <h2 className="text-4xl font-semibold">Why Choose Us</h2>
            <ul className="w-1/2 space-y-2 my-4">
              <li>
                <h2 className="text-3xl font-semibold">Proof of quality</h2>
                <p className="text-sm">
                  Check any pro&apos;s work samples, client reviews, and
                  identity verification
                </p>
              </li>
              <li>
                <h2 className="text-3xl font-semibold">
                  No cost until you hire
                </h2>
                <p className="text-sm">
                  Interview potential fits for your job, negotiate rates, and
                  only pay for work you approve.
                </p>
              </li>
              <li>
                <h2 className="text-3xl font-semibold">Safe and secure</h2>
                <p className="text-sm">
                  Focus on your work knowing we help protect your data and
                  privacy. We&apos;re here with 24/7 support if you need it.
                </p>
              </li>
            </ul>
          </div>
          <div className="bg-[#1E244F] col-span-2 w-full h-full rounded-xl flex px-16 py-8 justify-end items-start text-white text-2xl font-semibold flex-col gap-4">
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
                  className="size-[40px]"
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
                className="size-10"
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
                <span className="text-xl">Award winner</span>
                <span className="text-sm font-normal">
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
            className="absolute w-2/6 left-1/2 bottom-0"
          />
        </div>
        <div className="bg-secondary/10 p-4 rounded-xl backdrop-blur-lg">
          <h2 className="text-5xl font-semibold">Popular services</h2>
          <div className="grid grid-cols-3 gap-4 p-2 py-6 place-items-center">
            <div className="w-3/5">
              <div className="aspect-square">
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
            <div className="w-3/5">
              <div className="aspect-square">
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
            <div className="w-3/5">
              <div className="aspect-square">
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
          </div>
        </div>
        <div className="my-10 bg-gradient-to-r from-green-400 via-primary-dark to-black p-4 py-28 rounded-xl text-white text-center flex flex-col items-center justify-center gap-8">
          <h3 className="text-5xl font-semibold font-rokkitt">
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </section>
    </main>
  );
}

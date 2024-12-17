"use server";

import { Category } from "../types";

export async function getCategories() {
  const categories: Category[] = [
    {
      id: 1,
      name: "Art",
      slug: "art",
    },
    {
      id: 2,
      name: "Graphic Design",
      slug: "graphic-design",
    },
    {
      id: 3,
      name: "Illustration",
      slug: "illustration",
    },
    {
      id: 4,
      name: "Photography",
      slug: "photography",
    },
    {
      id: 5,
      name: "Web Design",
      slug: "web-design",
    },
  ];
  return categories;
}

export async function getLandingPageStats() {
  const stats = [
    {
      title: "Artwork",
      value: "98k+",
    },
    {
      title: "Auction",
      value: "13k+",
    },
    {
      title: "Artist",
      value: "16k+",
    },
  ];
  return stats;
}

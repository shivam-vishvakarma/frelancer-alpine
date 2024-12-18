"use server";

import { Category, Domain, Stats } from "../types";

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
  const stats: Stats[] = [
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

export async function getAvailableDomains() {
  const domains: Domain[] = [
    {
      id: "1",
      title: "Web Development",
      slug: "web-development",
    },
    {
      id: "2",
      title: "Mobile Development",
      slug: "mobile-development",
    },
    {
      id: "3",
      title: "Artificial Intelligence",
      slug: "artificial-intelligence",
    },
    {
      id: "4",
      title: "HRM",
      slug: "hrm",
    },
    {
      id: "5",
      title: "Finance",
      slug: "finance",
    },
    {
      id: "6",
      title: "ERP",
      slug: "erp",
    },
  ];
  return domains;
}

export async function getAvailableCategories(slug: string) {
  let categories: Category[] = [];
  switch (slug) {
    case "web-development":
      categories = [
        {
          id: 1,
          name: "Frontend",
          slug: "frontend",
        },
        {
          id: 2,
          name: "Backend",
          slug: "backend",
        },
        {
          id: 3,
          name: "Fullstack",
          slug: "fullstack",
        },
      ];
      break;
    case "mobile-development":
      categories = [
        {
          id: 1,
          name: "Android",
          slug: "android",
        },
        {
          id: 2,
          name: "iOS",
          slug: "ios",
        },
        {
          id: 3,
          name: "Cross Platform",
          slug: "cross-platform",
        },
      ];
      break;
    case "artificial-intelligence":
      categories = [
        {
          id: 1,
          name: "Machine Learning",
          slug: "machine-learning",
        },
        {
          id: 2,
          name: "Deep Learning",
          slug: "deep-learning",
        },
        {
          id: 3,
          name: "Computer Vision",
          slug: "computer-vision",
        },
      ];
      break;
    case "hrm":
      categories = [
        {
          id: 1,
          name: "Recruitment",
          slug: "recruitment",
        },
        {
          id: 2,
          name: "Performance Management",
          slug: "performance-management",
        },
        {
          id: 3,
          name: "Training & Development",
          slug: "training-and-development",
        },
      ];
      break;
    case "finance":
      categories = [
        {
          id: 1,
          name: "Accounting",
          slug: "accounting",
        },
        {
          id: 2,
          name: "Investment",
          slug: "investment",
        },
        {
          id: 3,
          name: "Taxation",
          slug: "taxation",
        },
      ];
      break;
    case "erp":
      categories = [
        {
          id: 1,
          name: "Accounting",
          slug: "accounting",
        },
        {
          id: 2,
          name: "Inventory",
          slug: "inventory",
        },
        {
          id: 3,
          name: "HRM",
          slug: "hrm",
        },
      ];
      break;
    default:
      break;
  }
  return categories;
}

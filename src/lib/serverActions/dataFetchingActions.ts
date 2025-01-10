"use server";

import { Category, City, Company, Domain, Stats, Usp } from "../types";

export async function getCategories() {
  console.log("getCategories");

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

export async function getPlansByCategory() {
  const plans = [
    {
      slug: "basic",
      plan_name: "Basic",
      plan_items: ["Item 1", "Item 2", "Item 3"],
    },
    {
      slug: "standard",
      plan_name: "Standard",
      plan_items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    },
    {
      slug: "premium",
      plan_name: "Premium",
      plan_items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    },
  ];
  return plans;
}

export async function getTechnologyStack() {
  const techStack = [
    {
      title: "MERN",
      slug: "mern",
    },
    {
      title: "Django",
      slug: "django",
    },
    {
      title: "Laravel",
      slug: "laravel",
    },
    {
      title: "Spring Boot",
      slug: "spring-boot",
    },
    {
      title: "Flutter",
      slug: "flutter",
    },
    {
      title: "React Native",
      slug: "react-native",
    },
    {
      title: "Tensorflow",
      slug: "tensorflow",
    },
    {
      title: "PyTorch",
      slug: "pytorch",
    },
  ];
  return techStack;
}

export async function getTechnologyStackDetails(stack: string) {
  const stackDetails = [
    {
      title: "MERN",
      image: "https://picsum.photos/300/200",
      description:
        "MERN is a full-stack JavaScript solution that helps you build fast, robust, and maintainable production web applications using MongoDB, Express, React, and Node.js.",
      slug: "mern",
      technologies: [
        {
          title: "MongoDB",
          usedFor: "Database",
          logo: "mongodb",
          why: "MongoDB is a general-purpose, document-based, distributed database built for modern application developers and for the cloud era.",
        },
        {
          title: "Express",
          usedFor: "Backend",
          logo: "express",
          why: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
        },
        {
          title: "React",
          usedFor: "Frontend",
          logo: "react",
          why: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
        },
        {
          title: "Node.js",
          usedFor: "Runtime",
          logo: "nodejs",
          why: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
        },
      ],
      features: [
        "Single Page Application",
        "Server Side Rendering",
        "SEO Friendly",
        "Scalable",
        "Real-time Web Applications",
        "Cross Platform",
      ],
    },
    {
      title: "Django",
      image: "https://picsum.photos/300/200",
      description:
        "Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.",
      slug: "django",
      technologies: [
        {
          title: "Django",
          usedFor: "Backend",
          logo: "django",
          why: "Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.",
        },
        {
          title: "Django REST Framework",
          usedFor: "API",
          logo: "django-rest-framework",
          why: "Django REST framework is a powerful and flexible toolkit for building Web APIs.",
        },
        {
          title: "PostgreSQL",
          usedFor: "Database",
          logo: "postgresql",
          why: "PostgreSQL is a powerful, open-source object-relational database system.",
        },
      ],
      features: [
        "Rapid Development",
        "Secure",
        "Scalable",
        "Versatile",
        "SEO Friendly",
        "Cross Platform",
      ],
    },
    {
      title: "Laravel",
      image: "https://picsum.photos/300/200",
      description:
        "Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling.",
      slug: "laravel",
      technologies: [
        {
          title: "Laravel",
          usedFor: "Backend",
          logo: "laravel",
          why: "Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling.",
        },
        {
          title: "MySQL",
          usedFor: "Database",
          logo: "mysql",
          why: "MySQL is an open-source relational database management system.",
        },
        {
          title: "Blade",
          usedFor: "Template Engine",
          logo: "blade",
          why: "Blade is the simple, yet powerful templating engine provided with Laravel.",
        },
      ],
      features: [
        "Rapid Development",
        "Secure",
        "Scalable",
        "Versatile",
        "SEO Friendly",
        "Cross Platform",
      ],
    },
    {
      title: "Spring Boot",
      image: "https://picsum.photos/300/200",
      description:
        "Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can just run.",
      slug: "spring-boot",
      technologies: [
        {
          title: "Spring Boot",
          usedFor: "Backend",
          logo: "spring-boot",
          why: "Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can just run.",
        },
        {
          title: "Spring Data JPA",
          usedFor: "Data Access",
          logo: "spring-data-jpa",
          why: "Spring Data JPA, part of the larger Spring Data family, makes it easy to easily implement JPA based repositories.",
        },
        {
          title: "MySQL",
          usedFor: "Database",
          logo: "mysql",
          why: "MySQL is an open-source relational database management system.",
        },
      ],
      features: [
        "Rapid Development",
        "Secure",
        "Scalable",
        "Versatile",
        "SEO Friendly",
        "Cross Platform",
      ],
    },
    {
      title: "Flutter",
      image: "https://picsum.photos/300/200",
      description:
        "Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
      slug: "flutter",
      technologies: [
        {
          title: "Flutter",
          usedFor: "Frontend",
          logo: "flutter",
          why: "Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
        },
        {
          title: "Dart",
          usedFor: "Programming Language",
          logo: "dart",
          why: "Dart is a client-optimized language for fast apps on any platform.",
        },
      ],
      features: [
        "Single Codebase",
        "Hot Reload",
        "Expressive and Flexible UI",
        "Native Performance",
        "Cross Platform",
        "Open Source",
      ],
    },
    {
      title: "React Native",
      image: "https://picsum.photos/300/200",
      description:
        "React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.",
      slug: "react-native",
      technologies: [
        {
          title: "React Native",
          usedFor: "Frontend",
          logo: "react-native",
          why: "React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.",
        },
        {
          title: "Redux",
          usedFor: "State Management",
          logo: "redux",
          why: "Redux is a predictable state container for JavaScript apps.",
        },
        {
          title: "Expo",
          usedFor: "Development Tool",
          logo: "expo",
          why: "Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.",
        },
      ],
      features: [
        "Single Codebase",
        "Hot Reload",
        "Expressive and Flexible UI",
        "Native Performance",
        "Cross Platform",
        "Open Source",
      ],
    },
    {
      title: "Tensorflow",
      image: "https://picsum.photos/300/200",
      description:
        "TensorFlow is an end-to-end open-source platform for machine learning.",
      slug: "tensorflow",
      technologies: [
        {
          title: "Tensorflow",
          usedFor: "Machine Learning",
          logo: "tensorflow",
          why: "TensorFlow is an end-to-end open-source platform for machine learning.",
        },
        {
          title: "Keras",
          usedFor: "Deep Learning",
          logo: "keras",
          why: "Keras is a high-level neural networks API, written in Python and capable of running on top of TensorFlow, CNTK, or Theano.",
        },
        {
          title: "Python",
          usedFor: "Programming Language",
          logo: "python",
          why: "Python is a programming language that lets you work quickly and integrate systems more effectively.",
        },
      ],
      features: [
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
        "Open Source",
        "Cross Platform",
        "Scalable",
      ],
    },
    {
      title: "PyTorch",
      image: "https://picsum.photos/300/200",
      description:
        "PyTorch is an open source machine learning library based on the Torch library.",
      slug: "pytorch",
      technologies: [
        {
          title: "PyTorch",
          usedFor: "Machine Learning",
          logo: "pytorch",
          why: "PyTorch is an open source machine learning library based on the Torch library.",
        },
        {
          title: "Python",
          usedFor: "Programming Language",
          logo: "python",
          why: "Python is a programming language that lets you work quickly and integrate systems more effectively.",
        },
      ],
      features: [
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
        "Open Source",
        "Cross Platform",
        "Scalable",
      ],
    },
  ];
  return stackDetails.find((stackDetail) => stackDetail.slug === stack);
}

export async function getCompaniesByTechStack() {
  const companies: Company[] = [
    {
      logo: "https://picsum.photos/300/200",
      name: "Alpine Technologies",
      slug: "alpine-technologies",
      domains: ["Web Dev", "App Dev", "AI", "Finance"],
      location: "Nagpur",
      workingTime: "Full Time",
      ratings: 4.5,
      reviews: 120,
      description:
        "Alpine Technologies is a software development company that provides web development, mobile app development, artificial intelligence, and finance services.",
    },
    {
      logo: "https://picsum.photos/300/200",
      name: "Tech Solutions",
      slug: "tech-solutions",
      domains: ["Web Dev", "App Dev", "AI", "Finance"],
      location: "Pune",
      workingTime: "Part Time",
      ratings: 4.0,
      reviews: 100,
      description:
        "Tech Solutions is a software development company that provides web development, mobile app development, artificial intelligence, and finance services.",
    },
    {
      logo: "https://picsum.photos/300/200",
      name: "CodeX",
      slug: "codex",
      domains: ["Web Dev", "App Dev", "AI", "Finance"],
      location: "Mumbai",
      workingTime: "Full Time",
      ratings: 4.8,
      reviews: 150,
      description:
        "CodeX is a software development company that provides web development, mobile app development, artificial intelligence, and finance services.",
    },
    {
      logo: "https://picsum.photos/300/200",
      name: "Web Devs",
      slug: "web-devs",
      domains: ["Web Dev", "App Dev", "AI", "Finance"],
      location: "Nashik",
      workingTime: "Part Time",
      ratings: 4.2,
      reviews: 110,
      description:
        "Web Devs is a software development company that provides web development, mobile app development, artificial intelligence, and finance services.",
    },
    {
      logo: "https://picsum.photos/300/200",
      name: "App Devs",
      slug: "app-devs",
      domains: ["Web Dev", "App Dev", "AI", "Finance"],
      location: "Aurangabad",
      workingTime: "Full Time",
      ratings: 4.6,
      reviews: 130,
      description:
        "App Devs is a software development company that provides web development, mobile app development, artificial intelligence, and finance services.",
    },
    {
      logo: "https://picsum.photos/300/200",
      name: "AI Devs",
      slug: "ai-devs",
      domains: ["Web Dev", "App Dev", "AI", "Finance"],
      location: "Thane",
      workingTime: "Part Time",
      ratings: 4.1,
      reviews: 90,
      description:
        "AI Devs is a software development company that provides web development, mobile app development, artificial intelligence, and finance services.",
    },
    {
      logo: "https://picsum.photos/300/200",
      name: "Finance Devs",
      slug: "finance-devs",
      domains: ["Web Dev", "App Dev", "AI", "Finance"],
      location: "Solapur",
      workingTime: "Full Time",
      ratings: 4.7,
      reviews: 140,
      description:
        "Finance Devs is a software development company that provides web development, mobile app development, artificial intelligence, and finance services.",
    },
    {
      logo: "https://picsum.photos/300/200",
      name: "Tech Devs",
      slug: "tech-devs",
      domains: ["Web Dev", "App Dev", "AI", "Finance"],
      location: "Kolhapur",
      workingTime: "Part Time",
      ratings: 4.3,
      reviews: 105,
      description:
        "Tech Devs is a software development company that provides web development, mobile app development, artificial intelligence, and finance services.",
    },
  ];
  return companies;
}

export async function getLocations() {
  const locations: City[] = [
    {
      value: "Mumbai",
      label: "Mumbai",
    },
    {
      value: "Pune",
      label: "Pune",
    },
    {
      value: "Nagpur",
      label: "Nagpur",
    },
    {
      value: "Nashik",
      label: "Nashik",
    },
    {
      value: "Aurangabad",
      label: "Aurangabad",
    },
    {
      value: "Thane",
      label: "Thane",
    },
    {
      value: "Solapur",
      label: "Solapur",
    },
    {
      value: "Kolhapur",
      label: "Kolhapur",
    },
    {
      value: "Amravati",
      label: "Amravati",
    },
    {
      value: "Akola",
      label: "Akola",
    },
    {
      value: "Ahmednagar",
      label: "Ahmednagar",
    },
    {
      value: "Chandrapur",
      label: "Chandrapur",
    },
    {
      value: "Jalgaon",
      label: "Jalgaon",
    },
    {
      value: "Latur",
      label: "Latur",
    },
    {
      value: "Kalyan-Dombivali",
      label: "Kalyan-Dombivali",
    },
    {
      value: "Vasai-Virar",
      label: "Vasai-Virar",
    },
    {
      value: "Nanded",
      label: "Nanded",
    },
    {
      value: "Panvel",
      label: "Panvel",
    },
    {
      value: "Malegaon",
      label: "Malegaon",
    },
    {
      value: "Bhiwandi",
      label: "Bhiwandi",
    },
    {
      value: "Parbhani",
      label: "Parbhani",
    },
    {
      value: "Ichalkaranji",
      label: "Ichalkaranji",
    },
    {
      value: "Ambernath",
      label: "Ambernath",
    },
    {
      value: "Jalna",
      label: "Jalna",
    },
    {
      value: "Bhusawal",
      label: "Bhusawal",
    },
    {
      value: "Navi Mumbai",
      label: "Navi Mumbai",
    },
    {
      value: "Beed",
      label: "Beed",
    },
    {
      value: "Osmanabad",
      label: "Osmanabad",
    },
    {
      value: "Wardha",
      label: "Wardha",
    },
    {
      value: "Ulhasnagar",
      label: "Ulhasnagar",
    },
    {
      value: "Yavatmal",
      label: "Yavatmal",
    },
    {
      value: "Satara",
      label: "Satara",
    },
    {
      value: "Achalpur",
      label: "Achalpur",
    },
    {
      value: "Dhule",
      label: "Dhule",
    },
    {
      value: "Raigad",
      label: "Raigad",
    },
    {
      value: "Chandrapur",
      label: "Chandrapur",
    },
    {
      value: "Washim",
      label: "Washim",
    },
    {
      value: "Hingoli",
      label: "Hingoli",
    },
    {
      value: "Gondia",
      label: "Gondia",
    },
    {
      value: "Parli",
      label: "Parli",
    },
    {
      value: "Wani",
      label: "Wani",
    },
    {
      value: "Murtizapur",
      label: "Murtizapur",
    },
    {
      value: "Sangli",
      label: "Sangli",
    },
  ];
  return locations;
}

export async function getCommonUsp() {
  const usps: Usp[] = [
    {
      value: "Quality",
      label: "Quality",
    },
    {
      value: "Experience",
      label: "Experience",
    },
    {
      value: "Innovation",
      label: "Innovation",
    },
    {
      value: "Reliability",
      label: "Reliability",
    },
    {
      value: "Affordability",
      label: "Affordability",
    },
    {
      value: "Transparency",
      label: "Transparency",
    },
    {
      value: "Customer Satisfaction",
      label: "Customer Satisfaction",
    },
    {
      value: "Support",
      label: "Support",
    },
    {
      value: "Flexibility",
      label: "Flexibility",
    },
    {
      value: "Scalability",
      label: "Scalability",
    },
  ];
  return usps;
}

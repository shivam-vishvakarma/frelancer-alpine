export type Category = {
  id: number;
  name: string;
  slug: string;
};

export type Stats = {
  title: string;
  value: string;
};

export type Domain = {
  id: string;
  title: string;
  slug: string;
};

export type User = {
  name: string;
};

export type bread = {
  name: string;
  slug: string;
};

export type Company = {
  logo: string;
  name: string;
  slug: string;
  domains: string[];
  location: string;
  workingTime: string;
  ratings: number;
  reviews: number;
  description: string;
};

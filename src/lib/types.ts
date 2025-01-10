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

export type City = {
  value: string;
  label: string;
};

export type Step2Data = {
  yearOfIncorporation: string;
  noOfOffices: string;
  officeLocations: City[];
  noOfEmployees: string;
  companyTaxId: string;
  companyUSP: Usp[];
  aboutCompany: string;
};

export type Usp = {
  value: string;
  label: string;
};
